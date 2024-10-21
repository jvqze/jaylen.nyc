/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{tsx,ts,css,js,jsx}"],
    darkMode: "class",
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        extend: {
            colors: {
                ThemeDark: "#111212",
            },
            animation: {
                "tween-in-out": "tweenInOut 3s infinite",
            },
            keyframes: {
                tweenInOut: {
                    "0%, 100%": { opacity: 0, transform: "scale(0.9)" },
                    "50%": { opacity: 1, transform: "scale(1)" },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
