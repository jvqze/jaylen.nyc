import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggle = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="focus:outline-none bg-none xs:bg-gray-200 xs:dark:bg-gray-800 rounded-lg p-3 h-10 w-10 flex items-center justify-center"
      onClick={() => toggle()}
    >
      {(() => {
        if (theme == "light") {
          return <BsFillMoonStarsFill />;
        }

        return <BsFillSunFill />;
      })()}
    </button>
  );
};