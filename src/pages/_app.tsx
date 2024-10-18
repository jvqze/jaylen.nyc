import "../styles/globals.css";

import { motion } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useState } from "react";
import { FaBars, FaDiscord, FaGamepad, FaGithub, FaTimes } from "react-icons/fa";

import ErrorBoundary from "../components/ErrorBoundary";

const Time = dynamic(() => import("../components/Time"), {
    ssr: false,
});

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const icons = [
        { id: 1, name: "GitHub", icon: FaGithub, link: "https://github.com/jvqze" },
        { id: 2, name: "Steam", icon: FaGamepad, link: "https://steamcommunity.com/id/jvqze/" },
        {
            id: 3,
            name: "Discord",
            icon: FaDiscord,
            link: "https://discord.com/users/1203092268672753785",
        },
    ];

    return (
        <SessionProvider session={session}>
            <ErrorBoundary>
                <div className="mx-auto flex min-h-screen max-w-4xl flex-col bg-ThemeDark">
                    <div className="flex items-center justify-between">
                        <nav className="flex-1">
                            <ul className="hidden space-x-4 px-5 py-10 md:flex">
                                <motion.li
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="shrink-0"
                                >
                                    <a
                                        className="block rounded-md py-3 font-mono text-base no-underline transition-transform dark:hover:text-white sm:inline-block sm:rounded-full sm:bg-white/0 sm:px-5 sm:font-normal sm:hover:bg-neutral-900/5 dark:sm:hover:bg-white/10 md:text-xl"
                                        href="/"
                                    >
                                        main page
                                    </a>
                                </motion.li>

                                <motion.li
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="shrink-0"
                                >
                                    <a
                                        className="block rounded-md py-3 font-mono text-base no-underline transition-transform dark:hover:text-white sm:inline-block sm:rounded-full sm:bg-white/0 sm:px-5 sm:font-normal sm:hover:bg-neutral-900/5 dark:sm:hover:bg-white/10 md:text-xl"
                                        href="/about"
                                    >
                                        about
                                    </a>
                                </motion.li>

                                <motion.li
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="shrink-0"
                                >
                                    <a
                                        className="block rounded-md py-3 font-mono text-base no-underline transition-transform dark:hover:text-white sm:inline-block sm:rounded-full sm:bg-white/0 sm:px-5 sm:font-normal sm:hover:bg-neutral-900/5 dark:sm:hover:bg-white/10 md:text-xl"
                                        href="/friends"
                                    >
                                        friends
                                    </a>
                                </motion.li>

                                <motion.li
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="shrink-0"
                                >
                                    <a
                                        className="block rounded-md py-3 font-mono text-base no-underline transition-transform dark:hover:text-white sm:inline-block sm:rounded-full sm:bg-white/0 sm:px-5 sm:font-normal sm:hover:bg-neutral-900/5 dark:sm:hover:bg-white/10 md:text-xl"
                                        href="/blog"
                                    >
                                        blogs
                                    </a>
                                </motion.li>
                            </ul>

                            <div className="md:hidden">
                                <button
                                    className="px-5 py-10 text-xl focus:outline-none"
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
                            <motion.li
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="shrink-0"
                            >
                                <a
                                    className="block rounded-md bg-white/0 px-5 py-3 font-mono text-lg font-normal no-underline hover:bg-neutral-900/5 dark:hover:bg-white/10 dark:hover:text-white"
                                    href="/"
                                >
                                    main page
                                </a>
                            </motion.li>
                            <motion.li
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="shrink-0"
                            >
                                <a
                                    className="block rounded-md bg-white/0 px-5 py-3 font-mono text-lg font-normal no-underline hover:bg-neutral-900/5 dark:hover:bg-white/10 dark:hover:text-white"
                                    href="/about"
                                >
                                    about
                                </a>
                            </motion.li>
                            <motion.li
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="shrink-0"
                            >
                                <a
                                    className="block rounded-md bg-white/0 px-5 py-3 font-mono text-lg font-normal no-underline hover:bg-neutral-900/5 dark:hover:bg-white/10 dark:hover:text-white"
                                    href="/friends"
                                >
                                    friends
                                </a>
                            </motion.li>
                            <motion.li
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="shrink-0"
                            >
                                <a
                                    className="block rounded-md bg-white/0 px-5 py-3 font-mono text-lg font-normal no-underline hover:bg-neutral-900/5 dark:hover:bg-white/10 dark:hover:text-white"
                                    href="/blog"
                                >
                                    blogs
                                </a>
                            </motion.li>
                            <li className="mt-4 flex h-12 w-full select-none items-center justify-center space-x-2 rounded-sm text-right text-base no-underline opacity-50 hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring sm:select-text md:text-xl">
                                <Time />
                            </li>
                        </ul>
                    </motion.div>

                    <div className="flex-grow">
                        <Component {...pageProps} />
                    </div>
                </div>
                <footer className="mt-10 w-full bg-black py-2">
                    <div className="text-center">
                        <div className="flex justify-center space-x-6">
                            {icons.map(({ id, name, icon: Icon, link }) => (
                                <motion.div
                                    key={id}
                                    className="group relative"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 transition-colors hover:text-white"
                                    >
                                        <Icon size={30} />
                                    </a>

                                    <span className="absolute bottom-10 left-1/2 -translate-x-1/2 scale-0 transform rounded-md bg-black px-2 py-1 text-xs text-white ring-1 ring-white transition-all duration-200 group-hover:scale-100">
                                        {name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </footer>
            </ErrorBoundary>
        </SessionProvider>
    );
}
