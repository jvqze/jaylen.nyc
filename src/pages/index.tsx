import { motion } from "framer-motion";
import Head from "next/head";
import SpotifyIntegration from "../components/SpotifyIntegration";
import { Data as LanyardData, useLanyard } from "use-lanyard";

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
    const customStatusActivity = activities.find((activity) => activity.type === 4);

    return (
        <div className="overflow-hidden">
            <Head>
                <title>jaylen.nyc</title>
            </Head>

            <main className="flex items-center justify-center min-h-screen overflow-hidden p-4">
                <div className="p-6 sm:p-8 rounded-lg shadow-2xl text-white max-w-full w-full sm:max-w-lg md:max-w-xl bg-[#202020] relative overflow-y-auto">
                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#131212] to-transparent rounded-lg opacity-10 pointer-events-none"></div>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                        <div className="relative">
                            <img
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-gray-500"
                                src={`https://cdn.discordapp.com/avatars/${lanyard?.discord_user.id}/${lanyard?.discord_user.avatar}.png`}
                                alt="Profile Avatar"
                            />
                            <span
                                className={`absolute bottom-1 right-1 w-5 h-5 sm:w-6 sm:h-6 border-2 border-[#242121] rounded-full ${statusColor}`}
                            ></span>
                        </div>
                        <div className="text-center sm:text-left">
                            <h2 className="text-lg sm:text-2xl font-semibold">{lanyard?.discord_user.global_name}</h2>
                            <p className="text-gray-400 text-sm sm:text-base">{statusText}</p>
                            {customStatusActivity && (
                                <p className="text-sm sm:text-md text-gray-300 mt-1">
                                    {customStatusActivity.state}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="space-y-4">
                        {activities
                            .filter((activity) => activity.type !== 4)
                            .filter(
                                (activity) =>
                                    activity.name !== "Spotify" &&
                                    activity.application_id?.toString() !== "spotify"
                            )
                            .map((activity) => (
                                <motion.div
                                    key={activity.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="p-3 sm:p-4 bg-gray-800 rounded-md flex items-center space-x-3 sm:space-x-4"
                                >
                                    {activity.assets?.large_image && (
                                        <img
                                            className="h-10 w-10 sm:h-12 sm:w-12 rounded-md"
                                            src={`https://${activity.assets.small_image.split('/https/')[1]}`}
                                            alt={activity.name}
                                        />
                                    )}
                                    <div>
                                        <p className="font-semibold text-base sm:text-lg">{activity.name}</p>
                                        {activity.details && (
                                            <p className="text-xs sm:text-sm text-gray-400">
                                                {activity.details}
                                            </p>
                                        )}
                                        {activity.state && (
                                            <p className="text-xs sm:text-sm text-gray-400">
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