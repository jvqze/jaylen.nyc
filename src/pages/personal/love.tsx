import Head from "next/head";

import type { NextPage } from "next";

const Christopher: NextPage = () => {
    return (
        <div className="bg-pink-500">
            <Head>
                <title>To My Wonderful Boyfriend...</title>
            </Head>
            <div className="flex min-h-screen items-center justify-center text-white">
                <main className="container mx-auto p-4 text-center">
                    <h1 className="mb-6 text-5xl font-bold">To My Wonderful Boyfriend, Chris</h1>
                    <div className="mx-auto mb-6 text-left text-lg leading-relaxed">
                        <p>
                            It's been nearly two months since we first got together (not that it matters but.. it felt longer), and I can't
                            help but reflect on how incredible this time has been. From our
                            spontaneous car rides to upstate New York to the little moments we share
                            daily, every experience with you has been nothing short of magical.
                            <br></br>
                            <br></br>I still remember the day you wrote me that heartfelt letter.
                            Your words captured so much of what we share, and I was touched beyond
                            measure. It’s rare to find someone who can articulate their feelings so
                            deeply and genuinely, and through that letter, I felt a connection with
                            you that only grew stronger.<br></br>
                            <br></br>
                            You always tell me that you’ve found your person in me, and each time
                            you say it, my heart swells with happiness. I feel the same way about
                            you. The countless things you’ve done for me, the times you’ve been
                            there when I needed you most, and the unwavering support and love you’ve
                            shown have made me realize how special our bond is. Our intimacy isn’t
                            just about physical closeness; it’s a deep, emotional connection that
                            truly defines what love means.<br></br>
                            <br></br>
                            One of my favorite things is sending you those love-filled reels that
                            remind me of us. Each one represents a piece of our story, a snapshot of
                            our journey together. They are small tokens that reflect how much fun we
                            have and the depth of our feelings for each other.<br></br>
                            <br></br>
                            Being with you has shown me what true love feels like. It’s the little
                            moments, like laughing at a shared joke, holding hands during our long
                            drives, or simply being in each other’s presence, that make our
                            relationship so meaningful. You bring so much joy and happiness into my
                            life, and I am incredibly grateful for you.<br></br>
                            <br></br>
                            Chris, you are my rock, my confidant, and my best friend. Your love and
                            support mean everything to me, and I cherish every moment we spend
                            together. Thank you for being who you are and for making me feel so
                            loved and valued.<br></br>
                            <br></br>
                            Here’s to many more months and years of shared adventures, endless
                            laughter, and deepening love. I am so lucky to have you in my life, and
                            I can’t wait to see what the future holds for us.<br></br>
                            <br></br>
                            From your boyfriend, Jaylen{" "}
                        </p>
                    </div>

                    <div className="flex justify-center space-x-4">
                        <img
                            src="https://cdn.jaylen.nyc/r/Discord_NY72z4SBoq.png"
                            alt="chris and I with our cute glasses. (we switched)"
                            className="h-32 w-32 rounded-full object-cover"
                        />
                        <img
                            src="https://cdn.jaylen.nyc/r/Discord_jYnjIFVWso.png"
                            alt="us near the manhattan-queens expwy <3"
                            className="h-32 w-32 rounded-full object-cover"
                        />
                        <img
                            src="https://cdn.jaylen.nyc/r/chris_my_wonderful_boyfriend.png"
                            alt="my wonderful boyfriend"
                            className="h-32 w-32 rounded-full object-cover"
                        />
                    </div>
                    <p className="pt-5">peep the beautiful pictures of us 💗, most importantly you</p>
                </main>
            </div>
        </div>
    );
};

export default Christopher;
