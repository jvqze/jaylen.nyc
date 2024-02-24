import type { NextPage } from "next";
import Head from "next/head";
import type { Data as LanyardData } from "use-lanyard";
import { useLanyard, type Data } from "use-lanyard";
import { ListItem } from "../components/Items";
import SpotifySong from "../components/Intergration";
import {
  SiSpotify,
  SiAtom,
  SiAdobefonts,
  SiAdobephotoshop,
  SiRoblox,
  SiSteam,
  SiDiscord,
  SiApple,
  SiMinecraft,
  SiOrigin,
  SiOsu,
  SiXbox,
  SiVisualstudiocode,
  SiGithub,
  SiGitlab,
  SiGit,
  SiTiktok,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNextdotjs,
  SiSega,
  SiTypescript,
} from "react-icons/si";

const DISCORD_ID = "363571068012593156";
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
        <title>jaylen.lol</title>
      </Head>

      <main>
        <div>
          <main className="mx-auto max-w-3xl space-y-4 md:py-24">
            <div className="space-y-2">
                            <img
                className="block rounded-xl shadow-xl mb-4 shadow-neutral-300 dark:shadow-none"
                src="https://cdn.jaylen.lol/r/opera_3myin0G3e1.gif"
                alt="a nice image outside..."
                height={"400"}
                width={"1000"}
              />
              <ul>
                <span className="text-3xl font-extrabold sm:text-4xl md:text-6xl">
                  <span id="username">
                    {" "}
                    <div
                      className={`h-8 w-8 mr-2 ring-[5px] md:h-12 md:w-12 md:ring-[6px] ${
                        lanyard ? statusMap[lanyard.discord_status] : null
                      } rounded-full inline-block`}
                    >
                      <div className="h-8 w-8 md:h-12 md:w-12 rounded-full select-none text-white ring-[3px] ring-ThemeDark">
                        <img
                          className="h-8 w-8 md:h-12 md:w-12 rounded-full"
                          src={`https://cdn.discordapp.com/avatars/${lanyard?.discord_user.id}/${lanyard?.discord_user.avatar}`}
                          alt="Avatar"
                          draggable={false}
                        />
                      </div>
                    </div>
                    {lanyard?.discord_user.username}
                  </span>
                </span>

                <SpotifySong />
              </ul>
              <p className="opacity-90">
                Hey there, I'm{" "}
                <span className="font-extrabold text-Blurple">Jaylen</span>
                <span className="text-sm font-extrabold"> [cis male]</span>.
                Currently living at{" "}
                <span className="font-extrabold text-[#ADD8E6]">
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
            <div className="space-y-4">
              <h1 className="text-2xl font-extrabold sm:text-3xl">
                You may be asking why I made this website...
              </h1>
              <p className="opacity-90">
                I made this website just as a little project for myself & every
                once & awhile this website will be updated whenever I have time.
                I'm still learning how to code so right now, it could look weird
                but I'm trying my best to make it look pretty. If I think I'm
                fully finished with this then I won't update this anymore.
              </p>
              <p className="opacity-80 text-center">
                &rarr; I've checked other websites people created and got ideas
                from them so thanks to those &larr;
              </p>
            </div>
            <div className="space-y-4">
              <h1 className="text-center text-2xl font-extrabold sm:text-3xl">
                main people i enjoy talking too
              </h1>
              <p className="opacity-90 text-center text-[#ff2929a9]">
                ❤️ angel, E. Vega, ethan, pablo, casper, sleepnt, ethan, klee, skyla, destinee ryeli, bup ❤️
              </p>
              <p className="opacity-70 text-center">
                i enjoy talking to all of you guys. even if we become distant, i
                will always have you here no matter what. and thats a promise i
                will keep. love u
              </p>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-extrabold sm:text-3xl">
                Applications
              </h1>
              <p className="opacity-90">
                This means all apps I use such as Games, Techs, & many more.
                (This part is just for fun haha)
              </p>
              <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                <ListItem icon={SiSpotify} text="Spotify" />
                <ListItem icon={SiAtom} text="Atom" />
                <ListItem icon={SiAdobefonts} text="Adobe Fonts" />
                <ListItem icon={SiAdobephotoshop} text="Adobe Photoshop" />
                <ListItem icon={SiRoblox} text="ROBLOX" />
                <ListItem icon={SiSteam} text="Steam" />
                <ListItem icon={SiDiscord} text="Discord" />
                <ListItem icon={SiApple} text="Apple" />
                <ListItem icon={SiMinecraft} text="Minecraft" />
                <ListItem icon={SiOrigin} text="Origin" />
                <ListItem icon={SiOsu} text="OSU!" />
                <ListItem icon={SiXbox} text="XBOX" />
                <ListItem icon={SiVisualstudiocode} text="Visual Studio Code" />
                <ListItem icon={SiGithub} text="Github" />
                <ListItem icon={SiGitlab} text="GItlab" />
                <ListItem icon={SiGit} text="Git" />
                <ListItem icon={SiTiktok} text="Tiktok" />
                <ListItem icon={SiJavascript} text="Javascript" />
                <ListItem icon={SiPython} text="Python" />
                <ListItem icon={SiHtml5} text="HTML" />
                <ListItem icon={SiCss3} text="CSS" />
                <ListItem icon={SiTailwindcss} text="TailwindCSS" />
                <ListItem icon={SiNextdotjs} text="Next.js" />
                <ListItem icon={SiSega} text="SEGA" />
                <ListItem icon={SiTypescript} text="TypeScript" />
              </ul>
            </div>
          </main>
        </div>
      </main>
    </div>
  );
}
