import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { ChangeEvent, useState } from "react";

export default function Page(): JSX.Element {
  const { data: session } = useSession(); // Fetch session with discordUserId
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
  
    if (file) {
      console.log("File Type:", file.type); // Debug log to see MIME type
      // Check if file is .mp3 or .ogg
      const isValidAudio = file.type === "audio/mp3" || file.type === "audio/mpeg" || file.type === "audio/ogg";
  
      if (isValidAudio) {
        setSelectedFile(file);
        setUploadStatus("");
      } else {
        setUploadStatus("Please upload a valid .mp3 or .ogg file.");
        setSelectedFile(null);
      }
    }
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) {
      setUploadStatus("You must be logged in to upload a file.");
      return;
    }

    if (selectedFile) {
      const formData = new FormData();
      formData.append("audioFile", selectedFile);

      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
          credentials: "include",
        });

        if (res.ok) {
          setUploadStatus("File uploaded successfully.");
          setSelectedFile(null);
        } else {
          const data = await res.json(); // Get response body for error details
          console.error("Upload error response:", data);
          setUploadStatus(`${data.message || "Unauthorized"}`);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        setUploadStatus("Error uploading file.");
      }
    } else {
      setUploadStatus("Please select a file to upload.");
    }
  };

  return (
    <div>
      <Head>
        <title>FE2 | Audio Uploader</title>
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center p-6">
        <h1 className="mb-6 text-4xl font-extrabold">in development</h1>

      </main>
    </div>
  );
}
