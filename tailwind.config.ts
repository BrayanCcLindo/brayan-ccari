import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-cairo)", "sans-serif"],
        basic: ["var(--font-open-sans)", "sans-serif"],
      },
      colors: {
        white: "rgba(var(--white))",
        gray: {
          50: "rgba(var(--button-text))",
          100: "rgba(var(--subtitle))",
          200: "rgba(var(--text))",
          300: "rgba(var(--main-bg))",
          400: "rgba(var(--button-bg))",
          500: "rgba(var(--menu))",
          600: "rgba(var(--icons-bg))",
        },
        purple: "rgba(var(--purple))",
        black: "rgba(var(--black))",
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
