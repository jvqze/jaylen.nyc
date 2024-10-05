import { HeartIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Head from "next/head";
import ethanspecialphoto from "../../public/img/ethan.svg";

import type { NextPage } from "next";

export default function Friends(): JSX.Element {
    return (
        <div>
            <Head>
                <title>jaylen.lol</title>
            </Head>

            <main>
                <div>
                    <main className="mx-auto max-w-3xl space-y-4 md:py-24">
                        <div className="space-y-4">
                            <div className="space-y-4">
                                <h2 className="text-5xl font-extrabold">My Friends 💖</h2>
                                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                                    {[
                                        { icon: HeartIcon, text: "jiro" },
                                        { icon: HeartIcon, text: "angel" },
                                        { icon: HeartIcon, text: "klee" },
                                        { icon: HeartIcon, text: "joel" },
                                        { icon: HeartIcon, text: "kymani" },
                                        { icon: HeartIcon, text: "naya w" },
                                        { icon: HeartIcon, text: "brandon" },
                                        { icon: HeartIcon, text: "hughie" },
                                        { icon: HeartIcon, text: "naya b" },
                                        { icon: HeartIcon, text: "jeanine" },
                                        { icon: HeartIcon, text: "sadurn" },
                                        { icon: HeartIcon, text: "ahmad" },
                                        { icon: ethanspecialphoto, text: "ethan" },
                                    ].map((item, index) => (
                                        <TechIcon key={index} icon={item.icon} text={item.text} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </main>
        </div>
    );
}

// https://cdn.jaylen.nyc/opera_c3AoNj6yan.png

function TechIcon({ icon: Icon, text }: { icon: any; text: string }) {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center space-y-2 rounded-lg bg-neutral-100 p-4 shadow-md dark:bg-neutral-800"
        >
            <Icon className="rounded-lg text-4xl text-gray-700 dark:text-gray-200" />
            <span className="font-bold text-gray-700 dark:text-gray-200">{text}</span>
        </motion.div>
    );
}
