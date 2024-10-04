import fs from "fs";

import FormData from "form-data";
import { File, Files, IncomingForm } from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth/core/types";
import { getServerSession } from "next-auth/next";
import fetch from "node-fetch";

import AudioFileModel from "../../models/AudioFile";
import authOptions from "./auth/[...nextauth]";

export const config = {
    api: {
        bodyParser: false,
    },
};

interface TixteResponse {
    direct_url: string;
    message?: string;
}

interface CustomSession extends Session {
    user: {
        discordUserId: string;
    };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
        // Retrieve the session using `getServerSession`
        const session = (await getServerSession(req, res, authOptions)) as CustomSession | null;
        console.log("Fetched Session:", session);

        if (!session) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        console.log("they have session");
        const { discordUserId } = session.user;
        const form = new IncomingForm();

        form.parse(req, async (err: Error | null, fields: any, files: Files): Promise<void> => {
            if (err) {
                console.error("Error parsing files:", err);
                return res.status(500).json({ message: "Error parsing files" });
            }

            const audioFile = files.audioFile as File | File[] | undefined;
            if (!audioFile) {
                return res.status(400).json({ message: "No file uploaded" });
            }

            const fileToUpload = Array.isArray(audioFile) ? audioFile[0] : audioFile;
            try {
                const filePath = fileToUpload.filepath;
                const fileStream = fs.createReadStream(filePath);

                const formData = new FormData();
                const uploadDomain = "cdn.jaylen.nyc";
                const newFilename = fileToUpload.originalFilename || "uploaded_file";

                const payloadJson = JSON.stringify({
                    domain: uploadDomain,
                    name: newFilename,
                });

                formData.append("payload_json", payloadJson);
                formData.append("file", fileStream, newFilename);

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

                if (statusCode === 200) {
                    const newFilePath = responseData.direct_url;

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
