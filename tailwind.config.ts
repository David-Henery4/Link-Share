import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      lgMob: "29.6875em", // 475px
      smallTablet: "36.25em", // 580px
      tablet: "46.25em", // 740px
      laptop: "66.25em", // 1060px
    },
    fontFamily: {
      instrumentSans: ["var(--font-instrument-sans)", "sans-serif"],
    },
    colors: {
      purple: "#633CFF",
      purpleLight: "#EFEBFF",
      purpleHover: "#BEADFF",
      darkGrey: "#333333",
      grey: "#737373",
      lightGrey: "#FAFAFA",
      border: "#D9D9D9",
      white: "#ffffff",
      red: "#FF3939",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
