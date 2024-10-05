import { motion } from "framer-motion";
import Head from "next/head";
import { Data as LanyardData, useLanyard } from "use-lanyard";

import SpotifyIntegration from "../components/SpotifyIntegration";

const DISCORD_ID = "1203092268672753785";
const statusMap = {
    online: "bg-green-500",
    idle: "bg-yellow-500",
    dnd: "bg-red-500",
    offline: "bg-neutral-500",
};

const statusTextMap = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    offline: "Offline",
};

type lanyardprops = {
    lanyard: LanyardData;
};

export default function Page(prop: lanyardprops): JSX.Element {
    const { data: lanyard } = useLanyard(DISCORD_ID, {
        initialData: prop.lanyard,
    });

    const status = lanyard?.discord_status || "offline";
    const statusColor = statusMap[status];
    const statusText = statusTextMap[status];

    const activities = lanyard?.activities || [];
    const customStatusActivity = activities.find(activity => activity.type === 4);

    return (
        <div className="overflow-hidden">
            <Head>
                <title>jaylen.nyc</title>
            </Head>

            <main className="flex min-h-screen items-center justify-center overflow-hidden p-4">
                <div className="relative w-full max-w-full overflow-y-auto rounded-lg bg-[#202020] p-6 shadow-2xl sm:max-w-lg sm:p-8 md:max-w-xl">
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-lg bg-gradient-to-b from-[#131212] to-transparent opacity-10"></div>
                    <div className="flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-x-4 sm:space-y-0">
                        <div className="relative">
                            <img
                                className="h-20 w-20 rounded-full border-2 border-gray-500 sm:h-24 sm:w-24"
                                src={`https://cdn.discordapp.com/avatars/${lanyard?.discord_user.id}/${lanyard?.discord_user.avatar}.png`}
                                alt="Profile Avatar"
                            />
                            <span
                                className={`absolute bottom-1 right-1 h-5 w-5 rounded-full border-2 border-[#242121] sm:h-6 sm:w-6 ${statusColor}`}
                            ></span>
                        </div>
                        <div className="text-center sm:text-left">
                            <h2 className="text-lg font-semibold text-white sm:text-2xl">
                                {lanyard?.discord_user.global_name}
                            </h2>
                            <p className="text-sm text-gray-400 sm:text-base">{statusText}</p>
                            {customStatusActivity && (
                                <p className="sm:text-md mt-1 text-sm text-gray-300">
                                    {customStatusActivity.state}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="space-y-4">
                        {activities
                            .filter(activity => activity.type !== 4)
                            .filter(
                                activity =>
                                    activity.name !== "Spotify" &&
                                    activity.application_id?.toString() !== "spotify",
                            )
                            .map(activity => (
                                <motion.div
                                    key={activity.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-4 flex items-center space-x-3 rounded-md bg-gray-800 p-3 sm:space-x-4 sm:p-4"
                                >
                                    {activity.assets?.large_image && (
                                        <img
                                            className="h-10 w-10 rounded-md sm:h-12 sm:w-12"
                                            src={`https://${activity.assets.small_image.split("/https/")[1]}`}
                                            alt={activity.name}
                                        />
                                    )}
                                    <div>
                                        <p className="text-base font-semibold text-white sm:text-lg">
                                            {activity.name}
                                        </p>
                                        {activity.details && (
                                            <p className="text-xs text-gray-400 sm:text-sm">
                                                {activity.details}
                                            </p>
                                        )}
                                        {activity.state && (
                                            <p className="text-xs text-gray-400 sm:text-sm">
                                                {activity.state}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                    </div>

                    {lanyard?.listening_to_spotify && (
                        <div className="mt-3">
                            <SpotifyIntegration />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
