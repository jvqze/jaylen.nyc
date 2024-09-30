import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ThemeSwitcher } from "../components/ToggleTheme";

const Time = dynamic(() => import("../components/Time"), {
    ssr: false,
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ThemeProvider attribute="class">
            <div className="mx-auto max-w-4xl px-5 py-10">
                <div className="flex items-center space-x-2">
                    <nav className="flex-1">
                        <ul className="flex space-x-4">
                            <li className="shrink-0">
                                <a
                                    className="block rounded-md py-3 font-mono text-lg no-underline sm:inline-block sm:rounded-full sm:bg-white/0 sm:px-5 sm:text-sm sm:font-normal sm:hover:bg-neutral-900/5 dark:hover:text-white dark:sm:hover:bg-white/10"
                                    href="/"
                                >
                                    main page
                                </a>
                            </li>
                            <li className="shrink-0">
                                <a
                                    className="block rounded-md py-3 font-mono text-lg no-underline sm:inline-block sm:rounded-full sm:bg-white/0 sm:px-5 sm:text-sm sm:font-normal sm:hover:bg-neutral-900/5 dark:hover:text-white dark:sm:hover:bg-white/10"
                                    href="/about"
                                >
                                    about
                                </a>
                            </li>
                            <li className="shrink-0">
                                <a
                                    className="block rounded-md py-3 font-mono text-lg no-underline sm:inline-block sm:rounded-full sm:bg-white/0 sm:px-5 sm:text-sm sm:font-normal sm:hover:bg-neutral-900/5 dark:hover:text-white dark:sm:hover:bg-white/10"
                                    href="/friends"
                                >
                                    friends
                                </a>
                            </li>
                            <li>
                                <ThemeSwitcher />
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <div className="mt-0.5 inline-flex h-12 w-full select-none items-center space-x-2 rounded-sm text-right text-lg no-underline opacity-50 hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring sm:select-text">
                            <Time />
                        </div>
                    </div>
                </div>
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    );
}