import type { NextPage } from "next";
import Head from "next/head";
import ReactPlayer from 'react-player'

export default function Friends(): JSX.Element {
  return (
    <div className="dark:text-white antialiased bg-ThemeDark bg-auto">
      <Head>
        <title>IS THAT JOEL?</title>
      </Head>

      <main>
        <div>
          <main className="mx-auto max-w-3xl md:py-24">
            <div className="space-y-4">
              <p className="opacity-80 text-center">
                &rarr; happy birthday joel. &larr;
              </p>
              <img
                className="block rounded-xl shadow-xl mb-4 shadow-neutral-300 dark:shadow-none"
                src="https://cdn.jaylen.nyc/r/Discord_AysGpnVlg9.png"
                alt="joel is coool"
                height={"400"}
                width={"1000"}
              />
              <ul>
                <span className="text-3xl font-extrabold sm:text-4xl md:text-6xl ">
                  HAPPY BIRTHDAY TO THE ONE AND ONLYYYY
                </span>
                <p className="opacity-90">HEY JOJO !!! HAPPY BIRTHDAYYYYYYY!! YOU'RE FINALLY 16!!!</p>
              </ul>
              <p className="opacity-90 text-center">
                Hi Joel, it’s me, Jaylen. One of your best friends & brother.
                I am so glad that I met you in the start of high school.
                That year was not it for us but I am so glad that we’re still here together and thriving.
                I really don’t know where to begin this message so this is really me yapping. In 9th grade,
                we weren’t as much close but this year, we’re really thriving. Joel, you are the best person
                to be born on this said planet earth. I am so glad that I know you and we’re still here together
                with our friend group and with even more friends. There’s times we don’t talk as much because you’re
                busy with your friends but HEY, let me not get into that because I know it’s all love.
                The stuff that we told each other; our deepest secrets and bad memories,
                I’m glad you’re still here and more happy than before. I must say, I’m actually more than happy you’re here.
                The time where your dad passed away,
                I was hurt for you because it saddens me just to see you sad and that time where you cried because I was going to leave.
                It really showed me how true of a friend you are. Like your jacket says,{" "}
                <span className="text-[#ff0000] font-bold">Life is Short</span>, so let’s make this time last while we’re here.
                And I just want to say that I hope after school is over, we’re still friends and we talk often and hangout occasionally.
                This goes to the same for the friend group. Anyways, this is Jaylen signing off.
              </p>
              <p className="opacity-80 text-center">
                &rarr; happy birthday joel. &larr;
              </p>
              <ReactPlayer
                url='https://audio.jukehost.co.uk/fWhZlWUFNAv2AZSBzPSatSmFKrH8dt2c'
                controls={false}
                playing={true}
              />
            </div>
          </main>
        </div>
      </main>
    </div>
  );
}
