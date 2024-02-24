import { useLanyard } from "use-lanyard";
import { SiSpotify } from "react-icons/si";
export const DISCORD_ID = "363571068012593156";

const SpotifySong = () => {
  const { data: lanyard } = useLanyard(DISCORD_ID);
  if (!lanyard || !lanyard.spotify) return null;

  return (
    <div className="bg-neutral-900 inline-flex items-center mt-2 md:mt-0 md:ml-2 rounded-lg">
      <img
        alt={`${lanyard.spotify.song}`}
        src={`${lanyard.spotify.album_art_url}`}
        className="rounded-tl-md rounded-bl-md h-auto w-[80px]"
      />
      <div className="m-2">
        <li className="flex items-center space-x-1 text-[#1ed760] font-semibold text-sm">
          <span>
            <SiSpotify className="h-4 w-4" />
          </span>
          <span>Listening to...</span>
        </li>
        <h1 className="text-ellipsis overflow-hidden text-sm font-bold opacity-90">
          {lanyard.spotify.song}
        </h1>
        <span className="opacity-80 text-base">{lanyard.spotify.artist}</span>
      </div>
    </div>
  );
};
export default SpotifySong