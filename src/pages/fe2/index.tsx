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
        <h1 className="mb-6 text-4xl font-extrabold">FE2 AUDIO UPLOADER BY JVQZE</h1>
        {session ? (
          <div className="w-full max-w-md rounded-lg p-6 shadow-lg">
            <p className="mb-4">
              Logged in as <span className="font-extrabold">{session.user?.name}</span>
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input
                type="file"
                accept=".mp3, .ogg"
                onChange={handleFileChange}
                className="mb-4 rounded border border-gray-300 p-2 transition hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <button
                type="submit"
                className="mb-2 rounded bg-blue-600 px-4 py-2 transition hover:bg-blue-700"
              >
                Upload
              </button>
              {uploadStatus && (
                <p className={`mt-2 ${uploadStatus.includes("failed") ?  "text-green-600" : "text-red-600"}`}>
                  {uploadStatus}
                </p>
              )}
            </form>
            <button
              onClick={() => signOut()}
              className="mt-4 rounded bg-red-600 px-4 py-2 transition hover:bg-red-700"
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className="w-full max-w-md rounded-lg bg-neutral-950 p-6 text-center shadow-lg">
            <p>You must be logged in to upload a file.</p>
            <button
              onClick={() => signIn("discord")}
              className="mt-4 rounded bg-green-600 px-4 py-2 transition hover:bg-green-700"
            >
              Sign in with Discord
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
