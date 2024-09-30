import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import {
    SiAdobefonts,
    SiCss3,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiNextdotjs,
    SiSpotify,
    SiTailwindcss,
    SiTypescript,
    SiVisualstudiocode,
} from "react-icons/si";
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
    online: "online",
    idle: "idle",
    dnd: "DND",
    offline: "offline",
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

    return (
        <div>
            <Head>
                <title>jaylen.nyc</title>
            </Head>

            <main>
                <div>
                    <main className="mx-auto max-w-3xl space-y-4 md:py-24">
                        {/* full site */}
                        <div className="space-y-2">
                            <img
                                className="mb-4 block rounded-xl shadow-xl shadow-neutral-300 dark:shadow-none"
                                src="https://cdn.jaylen.nyc/r/opera_0RmFO9ItHS.png"
                                alt="a banner i made in photoshop :D"
                                height={"400"}
                                width={"1000"}
                            />

                            <ul>
                                <div id="username" className="flex items-center gap-3">
                                    <img
                                        className="h-20 w-20 rounded-2xl shadow-lg"
                                        src={`https://cdn.discordapp.com/avatars/${lanyard?.discord_user.id}/${lanyard?.discord_user.avatar}`}
                                        alt="my avatar :3"
                                        draggable={false}
                                    />
                                    <div className="mt-10 inline-flex place-items-center gap-3 rounded-full bg-neutral-200 px-4 py-2 dark:bg-neutral-800">
                                        <span
                                            className={`inline-block h-4 w-4 rounded-full ${statusColor}`}
                                        ></span>
                                        {statusText}
                                    </div>
                                    <SpotifyIntegration />
                                </div>
                            </ul>
                        </div>

                        <section className="space-y-6">
                            {/* about moi but edited :) */}
                            <div className="rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 text-white shadow-lg">
                                <h2 className="text-xl font-bold">
                                    Hey, I'm Jaylen!{" "}
                                    <span className="text-sm font-extrabold text-[#ffffffa4]">
                                        (he/him)
                                    </span>
                                </h2>
                                <p>
                                    Currently living at{" "}
                                    <span className="font-extrabold text-[#d2bfff]">
                                        {lanyard?.kv.location}
                                    </span>
                                    . I'm an aspiring Software Developer and currently
                                    learning/coding{" "}
                                    <span className="font-extrabold">
                                        <span className="text-[#4B8BBE]">Pyt</span>
                                        <span className="text-[#FFD43B]">hon</span>
                                    </span>
                                    , <span className="font-extrabold text-[#e34c26]">HTML</span>,{" "}
                                    <span className="font-extrabold text-[#F0DB4F]">
                                        Javascript
                                    </span>
                                    , <span className="font-extrabold text-[#ADD8E6]">C & C++</span>{" "}
                                    & more! On my free time I usually do work or try to learn coding
                                    languages. I'm still rusty at coding but I'm trying my best to
                                    understand everything.
                                </p>
                            </div>

                            {/* coding bar cuz why not and it looks awwwwwsome */}
                            <div className="space-y-4">
                                <h2 className="text-center text-2xl font-extrabold">
                                    Coding Skills
                                </h2>
                                <div className="space-y-2">
                                    <SkillProgressBar skill="Python" percentage={95} />
                                    <SkillProgressBar skill="C# & C++" percentage={78} />
                                    <SkillProgressBar skill="JavaScript" percentage={87} />
                                    <SkillProgressBar skill="HTML & CSS" percentage={97} />
                                </div>
                            </div>

                            {/* tech section :D */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-extrabold sm:text-3xl">Tools I Use</h2>
                                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                                    {[
                                        { icon: SiSpotify, text: "Spotify" },
                                        { icon: SiAdobefonts, text: "Adobe Fonts" },
                                        { icon: SiVisualstudiocode, text: "Visual Studio Code" },
                                        { icon: SiGithub, text: "Github" },
                                        { icon: SiGit, text: "Git" },
                                        { icon: SiJavascript, text: "JavaScript" },
                                        { icon: SiHtml5, text: "HTML" },
                                        { icon: SiCss3, text: "CSS" },
                                        { icon: SiTailwindcss, text: "TailwindCSS" },
                                        { icon: SiNextdotjs, text: "Next.js" },
                                        { icon: SiTypescript, text: "TypeScript" },
                                    ].map((item, index) => (
                                        <TechIcon key={index} icon={item.icon} text={item.text} />
                                    ))}
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </main>
        </div>
    );
}

function SkillProgressBar({ skill, percentage }: { skill: string; percentage: number }) {
    return (
        <div>
            <div className="flex justify-between">
                <span className="font-bold">{skill}</span>
            </div>
            <div className="h-4 w-full rounded-full bg-gray-300">
                <motion.div
                    className="h-4 rounded-full bg-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1.5 }}
                />
            </div>
        </div>
    );
}

function TechIcon({ icon: Icon, text }: { icon: any; text: string }) {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center space-y-2 rounded-lg bg-neutral-100 p-4 shadow-md dark:bg-neutral-800"
        >
            <Icon className="text-4xl text-gray-700 dark:text-gray-200" />
            <span className="font-bold text-gray-700 dark:text-gray-200">{text}</span>
        </motion.div>
    );
}