import fs from "fs";
import FormData from "form-data";
import { File, Files, IncomingForm } from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import authOptions from "./auth/[...nextauth]";
import fetch from "node-fetch";
import AudioFileModel from "../../models/AudioFile";
import { Session } from "next-auth/core/types";

// Disable Next.js's default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

// Define the expected response structure from Tixte
interface TixteResponse {
  direct_url: string;
  message?: string;
}

// Extend the session to include the Discord user ID
interface CustomSession extends Session {
  user: {
    discordUserId: string;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    // Retrieve the session using `getServerSession`
    const session = (await getServerSession(req, res, authOptions)) as CustomSession | null;
    console.log("Fetched Session:", session);

    // Check if the session is valid and contains `discordUserId`
    if (!session) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    console.log("they have session")

    // Extract `discordUserId` from the session
    const { discordUserId } = session.user;

    // Initialize formidable to handle incoming files
    const form = new IncomingForm();

    // Parse the form data
    form.parse(req, async (err: Error | null, fields: any, files: Files): Promise<void> => {
      if (err) {
        console.error("Error parsing files:", err);
        return res.status(500).json({ message: "Error parsing files" });
      }

      // Get the uploaded audio file
      const audioFile = files.audioFile as File | File[] | undefined;

      if (!audioFile) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      // Handle the case where multiple files may be sent
      const fileToUpload = Array.isArray(audioFile) ? audioFile[0] : audioFile;

      try {
        // Create a readable stream from the uploaded file
        const filePath = fileToUpload.filepath;
        const fileStream = fs.createReadStream(filePath);

        // Prepare the form data to send to Tixte
        const formData = new FormData();
        const uploadDomain = "cdn.jaylen.nyc"; // Update with your upload domain
        const newFilename = fileToUpload.originalFilename || "uploaded_file";

        // Payload for Tixte upload
        const payloadJson = JSON.stringify({
          domain: uploadDomain,
          name: newFilename,
        });

        formData.append("payload_json", payloadJson);
        formData.append("file", fileStream, newFilename);

        // Send the upload request to Tixte
        const response = await fetch("https://api.tixte.com/v1/upload", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.TIXTE_API_KEY}`,
            ...formData.getHeaders(),
          },
          body: formData,
        });

        const responseData = (await response.json()) as TixteResponse;
        const statusCode = response.status;

        // Check the response status from Tixte
        if (statusCode === 200) {
          const newFilePath = responseData.direct_url;

          // Save the audio file info to the database
          const newAudioFile = new AudioFileModel({
            discordUserId,
            audioLink: newFilePath,
            createdAt: new Date(),
          });

          await newAudioFile.save();

          return res.status(200).json({
            message: "File uploaded successfully",
            audioLink: newFilePath,
          });
        } else {
          return res.status(statusCode).json({
            message: `Error uploading: ${responseData.message || responseData}`,
          });
        }
      } catch (uploadError) {
        console.error("Error uploading to Tixte:", uploadError);
        return res.status(500).json({
          message: uploadError instanceof Error ? uploadError.message : "Unknown error",
        });
      }
    });
  } catch (error) {
    console.error("Error in upload handler:", error);
    return res.status(500).json({
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
