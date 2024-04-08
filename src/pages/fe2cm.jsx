const Head = require("next/head")

export default function FE2CM() {
  return (
    <div className="dark:text-white antialiased bg-ThemeDark bg-auto">
      <Head>
        <title>FE2CM | File Uploader</title>
      </Head>

      <main>
        <div>
          <main className="mx-auto max-w-3xl space-y-4 md:py-24">
            <div className="space-y-6">
              <ul>
                <span className="text-3xl font-extrabold sm:text-4xl md:text-6xl ">
                  FE2CM | MP3 Uploader
                </span>
              </ul>
              <p className="opacity-90">Welcome to the FE2CM File Uploader! This is community made just for you to upload your music audio
                ever since Discord removed playing MP3's on their app. I know there's Dropbox and many other apps but I decided to make
                this easier for people. This will receive updates as this is an{" "} <span className="text-[#ff0000] font-bold">UNSTABLE{" "}</span>
                so please note that if there's any error, please report it to{" "} <span className="text-[#5900ff] font-bold">jvqze_{" "}</span>
                via Discord.
              </p>
            </div>
            <div className="bg-black p-2 rounded-md shadow-md shadow-[#5847b84f]">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload Audio File</label>
              <input 
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
              aria-describedby="file_input_help" 
              id="file_input" 
              type="file"
              accept=".mp3, .ogg"
              />
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">mp3 or ogg (5 MB).</p>
              <span className="py-5 flex items-center justify-center">
                <button 
                className="bg-[#4c00ff] hover:bg-[#723eeb] text-white font-bold py-2 px-4 rounded click"
                onClick={() => {

                }}>
                  Submit
                </button>
              </span>
              <p className="flex items-center justify-center opacity-70">
                Submitted: https://jaylen.nyc/audio/65e253a44c32ebdbd53908f3.mp3
              </p>
            </div>
          </main>
        </div>
      </main>
    </div>
  );
}
