import "../styles/globals.css";
import dynamic from "next/dynamic";
import { AppProps } from "next/app";
import { ThemeSwitcher } from "../components/ToggleTheme";
const Time = dynamic(() => import("../components/Time"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="mx-auto max-w-4xl py-10 px-5">
      <div className="flex items-center space-x-2">
        <nav className="flex-1">
          <ul className="flex space-x-4">
            <li className="shrink-0">
              <a
                className="block py-3 font-mono text-lg dark:hover:text-white no-underline dark:sm:hover:bg-white/10 rounded-md sm:inline-block sm:px-5 sm:text-sm sm:font-normal sm:bg-white/0 sm:hover:bg-neutral-900/5 sm:rounded-full"
                href="/"
              >
                main page
              </a>
            </li>
            <li className="shrink-0">
              <a
                className="block py-3 font-mono text-lg dark:hover:text-white no-underline dark:sm:hover:bg-white/10 rounded-md sm:inline-block sm:px-5 sm:text-sm sm:font-normal sm:bg-white/0 sm:hover:bg-neutral-900/5 sm:rounded-full"
                href="/friends"
              >
                friends
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <div className="text-right select-none sm:select-text w-full inline-flex text-lg rounded-sm focus:outline-none focus:opacity-100 focus:ring items-center space-x-2 no-underline opacity-50 hover:opacity-100 h-12 mt-0.5">
            <Time />
          </div>
        </div>
      </div>

      <Component {...pageProps} />
    </div>
  );
}
