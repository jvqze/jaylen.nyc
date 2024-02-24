import type { NextPage } from "next";
import Head from "next/head";

export default function Home(): JSX.Element {
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
                  404
                </span>
              </ul>
              <p className="opacity-90">This page does not exist... going into the unknown...?</p>
            </div>
          </main>
        </div>
      </main>
    </div>
  );
}
