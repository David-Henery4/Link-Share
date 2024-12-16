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
      mediumTablet: "42.1875em", // 675px
      tablet: "46.25em", // 740px
      laptop: "66.25em", // 1060px
      lgLaptop: "78.75em", // 1260px
    },
    fontFamily: {
      instrumentSans: ["var(--font-instrument-sans)", "sans-serif"],
    },
    gridTemplateColumns: {
      formColumns: "140px 1fr",
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
    extend: {
      maxWidth: {
        maxBodyWidth: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
