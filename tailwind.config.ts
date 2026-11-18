import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#d6c8b2",
        mutedBeige: "#b7ab98",
        coralRed: "#e97f61",
        darkCharcoal: "#2f2c29",
        navyBg: "#142337",
        deepNavy: "#0C1726",
        nightBlack: "#08090A",
      },
      fontFamily: {
        accent: ["var(--font-accent)", "cursive"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        heroGreeting: ["1.75rem", { lineHeight: "2.5rem" }],
        heroGreetingMd: ["2.25rem", { lineHeight: "2.75rem" }],
        heroGreetingLg: ["2.75rem", { lineHeight: "3.25rem" }],
        heroIntro: ["1.125rem", { lineHeight: "1.75rem" }],
        heroIntroMd: ["1.35rem", { lineHeight: "2rem" }],
        heroIntroLg: ["1.6rem", { lineHeight: "2.35rem" }],
        sectionDisplay: ["2.75rem", { lineHeight: "1.1" }],
        sectionDisplaySm: ["3.5rem", { lineHeight: "1.1" }],
        sectionDisplayMd: ["4.5rem", { lineHeight: "1.05" }],
        sectionDisplayLg: ["5.5rem", { lineHeight: "1.02" }],
        sectionDisplayWide: ["6.5rem", { lineHeight: "1" }],
      },
    },
  },
  plugins: [],
};

export default config;

