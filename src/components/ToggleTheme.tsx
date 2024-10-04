import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useEffect(() => {
        setMounted(true);
        console.log("Mounted state:", mounted);
    }, [mounted]);

    if (!mounted) return null;

    return (
        <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="xs:bg-gray-200 xs:dark:bg-gray-800 flex h-10 w-10 items-center justify-center rounded-lg p-3 focus:outline-none"
            onClick={toggleTheme}
        >
            {theme === "light" ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
        </button>
    );
};
