import Head from "next/head";
import { useLanyard } from "use-lanyard";

import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import type { Data, Data as LanyardData } from "use-lanyard";

const DISCORD_ID_1 = "1203092268672753785";
const DISCORD_ID_2 = "305858738097750027";

const statusMap: Record<Data["discord_status"], string> = {
    online: "ring-green-500",
    idle: "ring-yellow-500",
    dnd: "ring-red-500",
    offline: "ring-neutral-500",
};

type LanyardProps = {
    lanyard1: LanyardData;
    lanyard2: LanyardData;
};

export default function Home({ lanyard1, lanyard2 }: LanyardProps): JSX.Element {
    const { data: lanyardData1 } = useLanyard(DISCORD_ID_1, {
        initialData: lanyard1,
    });
    const { data: lanyardData2 } = useLanyard(DISCORD_ID_2, {
        initialData: lanyard2,
    });

    return (
        <div>
            <Head>
                <title>Christopher, my beloved</title>
            </Head>

            <main>
                <div className="mx-auto max-w-6xl space-y-4 md:py-24">
                    <div className="flex justify-evenly space-x-8">
                        <div className="space-y-2">
                            <div className="text-xl font-extrabold sm:text-2xl md:text-4xl">
                                <div id="username1" className="flex items-center gap-3">
                                    <div
                                        className={`mr-2 h-8 w-8 ring-[5px] md:h-12 md:w-12 md:ring-[6px] ${
                                            lanyardData1
                                                ? statusMap[lanyardData1.discord_status]
                                                : null
                                        } inline-block flex-shrink-0 rounded-full`}
                                    >
                                        <img
                                            className="h-8 w-8 rounded-full ring-[3px] ring-ThemeDark md:h-12 md:w-12"
                                            src={`https://cdn.discordapp.com/avatars/${lanyardData1?.discord_user.id}/${lanyardData1?.discord_user.avatar}`}
                                            alt="Avatar 1"
                                            draggable={false}
                                        />
                                    </div>
                                    <span>{lanyardData1?.discord_user.username}</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="text-xl font-extrabold sm:text-2xl md:text-4xl">
                                <div id="username2" className="flex items-center gap-3">
                                    <div
                                        className={`mr-2 h-8 w-8 ring-[5px] md:h-12 md:w-12 md:ring-[6px] ${
                                            lanyardData2
                                                ? statusMap[lanyardData2.discord_status]
                                                : null
                                        } inline-block flex-shrink-0 rounded-full`}
                                    >
                                        <img
                                            className="h-8 w-8 rounded-full ring-[3px] ring-ThemeDark md:h-12 md:w-12"
                                            src={`https://cdn.discordapp.com/avatars/${lanyardData2?.discord_user.id}/${lanyardData2?.discord_user.avatar}`}
                                            alt="Avatar 2"
                                            draggable={false}
                                        />
                                    </div>
                                    <span>{lanyardData2?.discord_user.username}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <p className="text-xl">
                            To my dearest boyfriend,{" "}
                            <span className="font-semibold text-pink-500">Chris</span>, our trip to{" "}
                            <span className="text-blue-500">Montreal</span> was something I’ll never
                            forget. I was so <span className="text-yellow-500">excited</span> yet{" "}
                            <span className="text-yellow-500">nervous</span> about the double date
                            on Saturday, not knowing how it would go. <br />
                            <br />
                            Despite my jitters, I ended up having so much{" "}
                            <span className="text-green-500">fun</span> with you, feeling{" "}
                            <span className="text-green-500">grateful</span> for the moments we
                            shared together in that beautiful city. <br />
                            <br />
                            However, there was something I couldn’t shake from my mind throughout
                            the weekend. I kept thinking about your friend, the one who’s{" "}
                            <span className="text-purple-500">gay</span> (zaid), who didn’t know
                            about me because he wasn’t feeling okay. <br />
                            <br />
                            It made me <span className="text-red-500">sad</span> because it felt
                            like there were so many opportunities before when you could have told
                            him about us, but it just never happened. <br />
                            <br />I started to feel like I was being{" "}
                            <span className="text-red-500">hidden</span>, like maybe I was only{" "}
                            <span className="text-red-500">temporary</span> in your life. That
                            feeling gnawed at me, making me wonder why I wasn’t being shared with
                            people who matter to you. <br />
                            <br />
                            But then Sunday came, our last day in Montreal, and we finally{" "}
                            <span className="text-blue-500">talked</span> about it. <br />
                            <br />
                            I’m so <span className="text-green-500">thankful</span> we did because
                            it brought us back together in a way that I missed so much. <br />
                            <br />I really <span className="font-bold text-green-500">
                                missed
                            </span>{" "}
                            us—our closeness, our connection, our openness. It’s something I cherish
                            deeply. <br />
                            <br />I don’t ever want to feel{" "}
                            <span className="font-extralight text-red-500">hidden</span> again,
                            Chris, because I want to be a part of your life in every way, not just
                            sometimes. <br />
                            <br />
                            That talk made me feel <span className="text-green-500">
                                secure
                            </span>{" "}
                            again, and I’m glad we worked through it, but it’s important to me that
                            I’m not kept in the shadows. <br />
                            <br />I <span className="font-extrabold text-pink-500">love</span> being
                            with you, and I want to be seen, cherished, and valued just like you are
                            to me.
                        </p>
                        <div className="mt-8 flex items-center justify-end space-x-3 text-right">
                            <p className="text-2xl text-gray-100">From yours truly,</p>
                            <p className="text-3xl font-semibold text-purple-600">Jaylen</p>
                            <img
                                className="h-12 w-12 rounded-full"
                                src={`https://cdn.discordapp.com/avatars/${lanyardData1?.discord_user.id}/${lanyardData1?.discord_user.avatar}`}
                                alt="Jaylen's Avatar"
                                draggable={false}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}