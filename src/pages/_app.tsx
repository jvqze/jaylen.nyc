import "../styles/globals.css";

import { motion } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import ErrorBoundary from "../components/ErrorBoundary";
import { ThemeSwitcher } from "../components/ToggleTheme";

const Time = dynamic(() => import("../components/Time"), {
    ssr: false,
});

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <SessionProvider session={session}>
            <ErrorBoundary>
                <ThemeProvider attribute="class">
                    <div className="mx-auto max-w-4xl px-5 py-10">
                        <div className="flex items-center justify-between">
                            <nav className="flex-1">
                                <ul className="hidden space-x-4 md:flex">
                                    <li className="shrink-0">
                                        <a
                                            className="block rounded-md py-3 font-mono text-base no-underline dark:hover:text-white sm:inline-block sm:rounded-full sm:bg-white/0 sm:px-5 sm:font-normal sm:hover:bg-neutral-900/5 dark:sm:hover:bg-white/10 md:text-xl"
                                            href="/"
                                        >
                                            main page
                                        </a>
                                    </li>
                                    <li className="shrink-0">
                                        <a
                                            className="block rounded-md py-3 font-mono text-base no-underline dark:hover:text-white sm:inline-block sm:rounded-full sm:bg-white/0 sm:px-5 sm:font-normal sm:hover:bg-neutral-900/5 dark:sm:hover:bg-white/10 md:text-xl"
                                            href="/about"
                                        >
                                            about
                                        </a>
                                    </li>
                                    <li className="shrink-0">
                                        <a
                                            className="block rounded-md py-3 font-mono text-base no-underline dark:hover:text-white sm:inline-block sm:rounded-full sm:bg-white/0 sm:px-5 sm:font-normal sm:hover:bg-neutral-900/5 dark:sm:hover:bg-white/10 md:text-xl"
                                            href="/friends"
                                        >
                                            friends
                                        </a>
                                    </li>
                                    <li className="mt-1.5 shrink-0">
                                        <ThemeSwitcher />
                                    </li>
                                </ul>

                                <div className="md:hidden">
                                    <button
                                        className="text-xl focus:outline-none"
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    >
                                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                                    </button>
                                </div>
                            </nav>
                            <div className="hidden md:flex">
                                <div className="mt-0.5 inline-flex h-12 w-full select-none items-center space-x-2 rounded-sm text-right text-base no-underline opacity-50 hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring sm:select-text md:text-xl">
                                    <Time />
                                </div>
                            </div>
                        </div>
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: isMenuOpen ? "auto" : 0 }}
                            className="overflow-hidden md:hidden"
                        >
                            <ul className="mt-4 space-y-4">
                                <li className="shrink-0">
                                    <a
                                        className="block rounded-md bg-white/0 px-5 py-3 font-mono text-lg font-normal no-underline hover:bg-neutral-900/5 dark:hover:bg-white/10 dark:hover:text-white"
                                        href="/"
                                    >
                                        main page
                                    </a>
                                </li>
                                <li className="shrink-0">
                                    <a
                                        className="block rounded-md bg-white/0 px-5 py-3 font-mono text-lg font-normal no-underline hover:bg-neutral-900/5 dark:hover:bg-white/10 dark:hover:text-white"
                                        href="/about"
                                    >
                                        about
                                    </a>
                                </li>
                                <li className="shrink-0">
                                    <a
                                        className="block rounded-md bg-white/0 px-5 py-3 font-mono text-lg font-normal no-underline hover:bg-neutral-900/5 dark:hover:bg-white/10 dark:hover:text-white"
                                        href="/friends"
                                    >
                                        friends
                                    </a>
                                </li>
                                <li className="flex justify-center">
                                    <ThemeSwitcher />
                                </li>
                                <li className="mt-4 flex h-12 w-full select-none items-center justify-center space-x-2 rounded-sm text-right text-base no-underline opacity-50 hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring sm:select-text md:text-xl">
                                    <Time />
                                </li>
                            </ul>
                        </motion.div>
                        <Component {...pageProps} />
                    </div>
                </ThemeProvider>
            </ErrorBoundary>
        </SessionProvider>
    );
}
