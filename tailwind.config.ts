import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme")

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#51B15C",
          low: "#EEF7EF",
          foreground: "#f8fafc"
        },
        red: {
          DEFAULT: "#FF1D1D",
          foreground: "#f8fafc"
        },
        orange: {
          DEFAULT: "#CF8812",
          foreground: "#f8fafc"
        },
        gray: {
          DEFAULT: "#C4C4C4",
          solid: "#939393",
          hard: "#303030"
        },
        white: {
          low: "#F7F7F7"
        },
        background: {
          DEFAULT: "#f8fafc"
        }
      },
    },
  },
  plugins: [],
};
export default config;
