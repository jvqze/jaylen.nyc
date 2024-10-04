import React, { useEffect, useState } from "react";
import { SiSpotify } from "react-icons/si";

interface SpotifyData {
    song: string;
    artist: string;
    album_art_url: string;
}

interface LanyardPresence {
    spotify?: SpotifyData;
}

interface LanyardMessage {
    op: number;
    t?: string;
    d: any;
}

export const DISCORD_ID = "1203092268672753785";

const SpotifyIntegration: React.FC = () => {
    const [spotifyData, setSpotifyData] = useState<SpotifyData | null>(null);

    useEffect(() => {
        const socket = new WebSocket("wss://api.lanyard.rest/socket");
        socket.onopen = () => {
            console.log("WebSocket connection opened");
            const subscribeMessage = {
                op: 2,
                d: {
                    subscribe_to_id: DISCORD_ID,
                },
            };
            socket.send(JSON.stringify(subscribeMessage));
        };

        socket.onmessage = (event: MessageEvent) => {
            const message: LanyardMessage = JSON.parse(event.data);
            switch (message.op) {
                case 0: {
                    const presence: LanyardPresence = message.d;

                    if (message.t === "INIT_STATE" || message.t === "PRESENCE_UPDATE") {
                        if (presence.spotify) {
                            setSpotifyData(presence.spotify);
                        } else {
                            setSpotifyData(null);
                        }
                    }
                    break;
                }
                case 1: {
                    const heartbeatInterval = message.d.heartbeat_interval;
                    setInterval(() => {
                        socket.send(JSON.stringify({ op: 3 }));
                    }, heartbeatInterval);
                    break;
                }
                default:
                    break;
            }
        };

        socket.onclose = () => {
            console.log("WebSocket connection closed");
        };

        return () => {
            socket.close();
        };
    }, []);

    if (!spotifyData) return null;

    return (
        <div className="flex flex-wrap md:flex-nowrap items-center rounded-lg bg-neutral-900 p-3 sm:p-4 space-x-3 sm:space-x-4 w-full mx-auto mt-3">
            <img
                alt={spotifyData.song}
                src={spotifyData.album_art_url}
                className="h-12 w-12 sm:h-16 sm:w-16 rounded-md object-cover"
                draggable={false}
            />
            <div className="flex-1 mt-2 md:mt-0">
                <li className="flex items-center space-x-1 text-xs sm:text-sm font-semibold text-[#1ed760]">
                    <span>
                        <SiSpotify className="h-3 w-3 sm:h-4 sm:w-4" />
                    </span>
                    <span>Listening to...</span>
                </li>
                <h1 className="truncate text-xs sm:text-sm font-bold opacity-90 mt-1">
                    {spotifyData.song}
                </h1>
                <span className="text-xs sm:text-sm opacity-80">{spotifyData.artist}</span>
            </div>
        </div>
    );
};

export default SpotifyIntegration;