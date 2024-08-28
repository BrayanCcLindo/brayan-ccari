/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Cairo", "sans-serif"],
        basic: ["Open Sans", "sans-serif"]
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
          600: "rgba(var(--icons-bg))"
        },
        purple: "rgba(var(--purple))",
        black: "rgba(var(--black))"
      }
    }
  },
  plugins: []
};
