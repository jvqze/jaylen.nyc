import React, { useEffect, useRef, useState } from "react";
import { SiSpotify } from "react-icons/si";

interface SpotifyData {
    song: string;
    artist: string;
    album_art_url: string;
    timestamps: {
        start: number;
        end: number;
    };
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
    const [progress, setProgress] = useState(0);
    const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        let socket: WebSocket;
        let heartbeatIntervalId: NodeJS.Timeout;
        let reconnectTimeoutId: NodeJS.Timeout;

        const connectWebSocket = () => {
            socket = new WebSocket("wss://api.lanyard.rest/socket");

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
                                updateProgress(
                                    presence.spotify.timestamps.start,
                                    presence.spotify.timestamps.end,
                                );
                            } else {
                                setSpotifyData(null);
                            }
                        }
                        break;
                    }
                    case 1: {
                        const heartbeatInterval = message.d.heartbeat_interval;
                        if (heartbeatIntervalId) clearInterval(heartbeatIntervalId);
                        heartbeatIntervalId = setInterval(() => {
                            socket.send(JSON.stringify({ op: 3 }));
                        }, heartbeatInterval);
                        break;
                    }
                    default:
                        break;
                }
            };

            socket.onclose = event => {
                console.log("WebSocket connection closed", event);
                clearInterval(heartbeatIntervalId);
                if (event.wasClean === false) {
                    reconnectTimeoutId = setTimeout(() => {
                        console.log("[LANYARD WEBSOCKET]: Reattempting to Open");
                        connectWebSocket();
                    }, 5000);
                }
            };

            socket.onerror = error => {
                console.error("WebSocket error", error);
                socket.close();
            };
        };

        connectWebSocket();
        return () => {
            socket.close();
            clearInterval(heartbeatIntervalId);
            clearTimeout(reconnectTimeoutId);
        };
    }, []);

    const updateProgress = (start: number, end: number) => {
        const totalDuration = end - start;
        if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
        }

        progressIntervalRef.current = setInterval(() => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - start;
            const progressPercentage = Math.min((elapsedTime / totalDuration) * 100, 100);
            setProgress(progressPercentage);

            if (elapsedTime >= totalDuration) {
                clearInterval(progressIntervalRef.current!);
            }
        }, 1000);
    };

    if (!spotifyData) return null;

    const formatTime = (ms: number) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000)
            .toString()
            .padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    const songDuration = spotifyData.timestamps.end - spotifyData.timestamps.start;
    const currentTime = Date.now() - spotifyData.timestamps.start;

    return (
        <div className="mx-auto mt-3 flex w-full flex-wrap items-center space-x-3 rounded-lg bg-neutral-900 px-2 py-2 sm:space-x-4 sm:p-4 md:flex-nowrap">
            <img
                alt={spotifyData.song}
                src={spotifyData.album_art_url}
                className="h-20 w-20 rounded-md object-cover sm:h-24 sm:w-24"
                draggable={false}
            />
            <div className="mt-2 flex-1 md:mt-0">
                <li className="flex items-center space-x-1 text-xs font-semibold text-[#1ed760] sm:text-sm">
                    <span>
                        <SiSpotify className="h-3 w-3 sm:h-4 sm:w-4" />
                    </span>
                    <span>Listening to...</span>
                </li>
                <h1 className="mt-1 truncate text-xs font-bold opacity-90 sm:text-sm">
                    {spotifyData.song}
                </h1>
                <span className="text-xs opacity-80 sm:text-sm">{spotifyData.artist}</span>

                <div className="mt-2 h-2.5 w-full rounded-full bg-gray-700">
                    <div
                        className="h-2.5 rounded-full bg-[#1ed760]"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <div className="mt-1 flex justify-between text-xs text-gray-400">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(songDuration)}</span>
                </div>
            </div>
        </div>
    );
};

export default SpotifyIntegration;
