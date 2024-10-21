import { CloudArrowUpIcon, UserGroupIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Head from "next/head";
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
import { Data as LanyardData, useLanyard } from "use-lanyard";

const DISCORD_ID = "1203092268672753785";

type lanyardprops = {
    lanyard: LanyardData;
};

export default function Page(prop: lanyardprops): JSX.Element {
    const { data: lanyard } = useLanyard(DISCORD_ID, {
        initialData: prop.lanyard,
    });

    return (
        <div>
            <Head>
                <title>jaylen.nyc | About Me</title>
            </Head>

            <main>
                <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <div className="lg:max-w-lg">
                                    <p className="text-base font-semibold leading-7">
                                        About Jaylen
                                    </p>
                                    <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
                                        Jaylen J Ruiz
                                    </h1>
                                    <p className="mt-6 text-xl leading-8">
                                        Hey there, the names is Jaylen! I've had the interest in
                                        coding since I was 7 years old. That is a somewhat a very
                                        young age but coding was something I'm proud of wanting to
                                        do!
                                    </p>
                                    <p className="mt-4 text-xl">
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
                                        ,{" "}
                                        <span className="font-extrabold text-[#e34c26]">HTML</span>,{" "}
                                        <span className="font-extrabold text-[#F0DB4F]">
                                            Javascript
                                        </span>
                                        ,{" "}
                                        <span className="font-extrabold text-[#ADD8E6]">
                                            C & C++
                                        </span>{" "}
                                        & more! On my free time I usually do work or try to learn
                                        coding languages. I'm still rusty at coding but I'm trying
                                        my best to understand everything.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                            <img
                                alt="It's me! Jaylen"
                                src="https://cdn.jaylen.nyc/r/Photos_D1QvHOLSW1.png"
                                className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                            />
                        </div>
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <div className="max-w-xl text-base leading-7 lg:max-w-lg">
                                    <p>
                                        All through these years, I grew into an individual who
                                        deeply analyzed each and every little thing that crossed my
                                        path but found pleasure in taking paths not usually taken.
                                        My curiosity nurtured an endless love for computer science,
                                        the field challenging me in the very best possible manner.
                                        I've spent countless hours diving into projects, some with
                                        mainstream technologies like React, while others leverage
                                        obscure tools like Lua or frameworks most people don't even
                                        know about. In fact, it's rather exciting to work on things
                                        that other people find complex or little known, but that is
                                        just one of the things that makes it so rewarding for me.
                                    </p>
                                    <ul role="list" className="mt-8 space-y-8">
                                        <li className="flex gap-x-3">
                                            <CloudArrowUpIcon
                                                aria-hidden="true"
                                                className="mt-1 h-5 w-5 flex-none"
                                            />
                                            <span>
                                                <strong className="font-semibold">
                                                    Leadership
                                                </strong>{" "}
                                                Whether it's taking charge in projects and working
                                                with unique technologies it has given me the
                                                confidence to push boundaries. In these moments,
                                                that is where I learned how to adapt, inspire, and
                                                grow. Balancing the technical and the human
                                                aspect-motivating and troubleshooting a team when
                                                things go wrong, finding creative solutions-has
                                                given me invaluable skills beyond just coding. These
                                                experiences have educated me that I can conquer
                                                anything, be it in Computer Science or in life.
                                            </span>
                                        </li>
                                        <li className="flex gap-x-3">
                                            <UserGroupIcon
                                                aria-hidden="true"
                                                className="mt-1 h-5 w-5 flex-none"
                                            />
                                            <span>
                                                <strong className="font-semibold">Teamwork</strong>{" "}
                                                has been the major factor in my growth concerning
                                                computer science and life in general. Working as
                                                part of a team has taught me to approach problems
                                                with flexibility and openness, considering that each
                                                member comes with something different. I have been
                                                accorded many opportunities to work on projects both
                                                at work and at school, whereby striking a balance
                                                between different thinking has paid off in creating
                                                creative solutions. These experiences have taught me
                                                how to communicate, how to overcome obstacles as a
                                                team, and how to appreciate the true meaning of
                                                teamwork in achieving success.
                                            </span>
                                        </li>
                                    </ul>
                                    <p className="mt-8">
                                        Overall, these main motivating factors in my personal and
                                        professional development have been helping me in my growth
                                        as a person and improving. Leading teams taught me the ways
                                        of taking initiative, making confident decisions, and
                                        inspiring others to work towards one common goal. At the
                                        same time, being part of a team has allowed me to realize
                                        the value of collaboration and shared effort. Presently, I
                                        have learned how to communicate, listen to other people's
                                        perspectives, and balance different personalities. All these
                                        experiences not only strengthened my problem-solving and
                                        organizing skills but also helped me as a person to become
                                        resilient, adaptive, and full of responsibility in
                                        everything that I do.
                                    </p>
                                    <h2 className="mt-16 text-2xl font-bold tracking-tight">
                                        Why did I make this? 🤔
                                    </h2>
                                    <p className="mt-2">
                                        This website was originally made just to see how I would do
                                        with React and Typescript. Now, it's something I'm
                                        proficient and I can proudly say that. Thanks to my Coding
                                        Classes when I was young and now I can make more
                                        personal/business projects for now! P.S. This website got
                                        rebranded, for those that saw it before 😉
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 space-y-4">
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
                </div>
            </main>
        </div>
    );
}

function TechIcon({ icon: Icon, text }: { icon: any; text: string }) {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center space-y-2 rounded-lg bg-neutral-800 p-4 shadow-md"
        >
            <Icon className="text-4xl text-gray-200" />
            <span className="font-bold text-gray-200">{text}</span>
        </motion.div>
    );
}
