import Head from "next/head";
import {
    SiAdobefonts,
    SiAdobephotoshop,
    SiApple,
    SiAtom,
    SiCss3,
    SiDiscord,
    SiGit,
    SiGithub,
    SiGitlab,
    SiHtml5,
    SiJavascript,
    SiMinecraft,
    SiNextdotjs,
    SiOrigin,
    SiOsu,
    SiPython,
    SiRoblox,
    SiSega,
    SiSpotify,
    SiSteam,
    SiTailwindcss,
    SiTiktok,
    SiTypescript,
    SiVisualstudiocode,
    SiXbox,
} from "react-icons/si";
import { useLanyard } from "use-lanyard";

import SpotifySong from "../components/Intergration";
import { ListItem } from "../components/Items";

import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import type { Data, Data as LanyardData } from "use-lanyard";

const DISCORD_ID = "1203092268672753785";
const statusMap: Record<Data["discord_status"], string> = {
    online: "ring-green-500",
    idle: "ring-yellow-500",
    dnd: "ring-red-500",
    offline: "ring-neutral-500",
};

type lanyardprops = {
    lanyard: LanyardData;
};

export default function Home(prop: lanyardprops): JSX.Element {
    const { data: lanyard } = useLanyard(DISCORD_ID, {
        initialData: prop.lanyard,
    });

    return (
        <div>
            <Head>
                <title>jaylen.nyc</title>
            </Head>

            <main>
                <div>
                    <main className="mx-auto max-w-3xl space-y-4 md:py-24">
                        <div className="space-y-2">
                            <img
                                className="mb-4 block rounded-xl shadow-xl shadow-neutral-300 dark:shadow-none"
                                src="https://cdn.jaylen.nyc/r/opera_0RmFO9ItHS.png"
                                alt="a banner i made in photoshop :D"
                                height={"400"}
                                width={"1000"}
                            />
                            <ul>
                            <div className="text-3xl font-extrabold sm:text-3xl md:text-5xl">
                                    <div id="username" className="flex items-center gap-3">
                                        <div
                                            className={`mr-2 h-8 w-8 ring-[5px] md:h-12 md:w-12 md:ring-[6px] ${
                                                lanyard ? statusMap[lanyard.discord_status] : null
                                            } inline-block rounded-full`}
                                        >
                                            <img
                                                className="h-8 w-8 rounded-full ring-[3px] ring-ThemeDark md:h-12 md:w-12"
                                                src={`https://cdn.discordapp.com/avatars/${lanyard?.discord_user.id}/${lanyard?.discord_user.avatar}`}
                                                alt="Avatar"
                                                draggable={false}
                                            />
                                        </div>
                                        <span className="relative bottom-1 ">{lanyard?.discord_user.username}</span>
                                    </div>
                                </div>

                                <SpotifySong />
                            </ul>
                            <p className="opacity-90">
                                Hey there, I'm{" "}
                                <span className="font-extrabold text-Blurple">Jaylen</span>
                                <span className="text-sm font-extrabold"> [cis male]</span>.
                                Currently living at{" "}
                                <span className="font-extrabold text-[#b497f8]">
                                    {lanyard?.kv.location}
                                </span>
                                . I'm an aspiring Software Developer and currently learning/coding{" "}
                                <span className="font-extrabold">
                                    <span className="text-[#4B8BBE]">Pyt</span>
                                    <span className="text-[#FFD43B]">hon</span>
                                </span>
                                , <span className="font-extrabold text-[#e34c26]">HTML</span>,{" "}
                                <span className="font-extrabold text-[#F0DB4F]">Javascript</span>,{" "}
                                <span className="font-extrabold text-[#ADD8E6]">C & C++</span> &
                                more! On my free time I usually do work or try to learn coding
                                languages. I'm still rusty at coding but I'm trying my best to
                                understand everything.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-2xl font-extrabold sm:text-3xl">
                                You may be asking why I made this website...
                            </h1>
                            <p className="opacity-90">
                                I made this website just as a little project for myself & every once
                                & awhile this website will be updated whenever I have time. I'm
                                still learning how to code for future Next.js & React projects, it
                                could look weird but I'm trying my best to make it look pretty. If I
                                think I'm fully finished with this then I won't update this anymore.
                                (im lying)
                            </p>
                            <p className="text-center opacity-80">
                                &rarr; I've checked other websites people created and got ideas from
                                them so thanks to those &larr;
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-2xl font-extrabold sm:text-3xl">
                                what i used for coding this website
                            </h1>
                            <p className="opacity-90">dont be surprised ❤</p>
                            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                                <ListItem icon={SiSpotify} text="Spotify (for sanity)" />
                                <ListItem icon={SiAdobefonts} text="Adobe Fonts" />
                                <ListItem icon={SiVisualstudiocode} text="Visual Studio Code" />
                                <ListItem icon={SiGithub} text="Github" />
                                <ListItem icon={SiGit} text="Git" />
                                <ListItem icon={SiJavascript} text="Javascript" />
                                <ListItem icon={SiHtml5} text="HTML" />
                                <ListItem icon={SiCss3} text="CSS" />
                                <ListItem icon={SiTailwindcss} text="TailwindCSS" />
                                <ListItem icon={SiNextdotjs} text="Next.js" />
                                <ListItem icon={SiTypescript} text="TypeScript" />
                            </ul>
                        </div>
                    </main>
                </div>
            </main>
        </div>
    );
}
