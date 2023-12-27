/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Cairo", "sans-serif"],
        basic: ["Open Sans", "sans-serif"],
      },
      colors: {
        white: "var(--white)",
        // black: "var(--black)",
        gray: {
          50: "var(--button-text)",
          100: "var(--subtitle)",
          200: "var(--text)",
          300: "var(--main-bg)",
          400: "var(--button-bg)",
          500: "var(--menu)",
          600: "var(--icons-bg)",
        },
        purple: "var(--purple)",
        black: "var(--black)",
      },
    },
  },
  plugins: [],
};
