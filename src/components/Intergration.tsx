import { SiSpotify } from "react-icons/si";
import { useLanyard } from "use-lanyard";

export const DISCORD_ID = "363571068012593156";

const SpotifySong = () => {
    const { data: lanyard } = useLanyard(DISCORD_ID);
    if (!lanyard || !lanyard.spotify) return null;

    return (
        <div className="mt-2 inline-flex items-center rounded-lg bg-neutral-900 md:mt-0 md:ml-2">
            <img
                alt={`${lanyard.spotify.song}`}
                src={`${lanyard.spotify.album_art_url}`}
                className="h-auto w-[80px] rounded-tl-md rounded-bl-md"
            />
            <div className="m-2">
                <li className="flex items-center space-x-1 text-sm font-semibold text-[#1ed760]">
                    <span>
                        <SiSpotify className="h-4 w-4" />
                    </span>
                    <span>Listening to...</span>
                </li>
                <h1 className="overflow-hidden text-ellipsis text-sm font-bold opacity-90">
                    {lanyard.spotify.song}
                </h1>
                <span className="text-base opacity-80">{lanyard.spotify.artist}</span>
            </div>
        </div>
    );
};
export default SpotifySong;
