import type { NextPage } from "next";
import Head from "next/head";

export default function Friends(): JSX.Element {
  return (
    <div className="dark:text-white antialiased bg-ThemeDark bg-auto">
      <Head>
        <title>jaylen.lol</title>
      </Head>

      <main>
        <div>
          <main className="mx-auto max-w-3xl space-y-4 md:py-24">
            <div className="space-y-4">
              <ul>
                <span className="text-3xl font-extrabold sm:text-4xl md:text-6xl ">
                  ...
                </span>
              </ul>
              <p className="opacity-90">So... this page is going to be changed (maybe) & I haven't finished the front page. I'll finish the first page then will go on to the next! 🤞</p>
            </div>
          </main>
        </div>
      </main>
    </div>
  );
}
