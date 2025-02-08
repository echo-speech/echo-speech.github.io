import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      spacing: {
        "navbar-height": "4rem",
      },
      colors: {
        primary: {
          black: "#000000",
          neutral: "#404040",
          white: "#FFFFFF",
        },
        zinc: {
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          500: "#71717a",
          800: "#27272a",
        },
        error: {
          500: "#ef4444",
        },
      },
      fontFamily: {
        sans: ["Sora", "sans-serif"],
      },
      fontSize: {
        "display-outlined": [
          "3rem", // 48px -> 3rem
          { lineHeight: "3.5rem", letterSpacing: "-0.02em" }, // 56px -> 3.5rem
        ],
        "display-medium": [
          "3rem", // 48px -> 3rem
          { lineHeight: "3.5rem", letterSpacing: "-0.02em" }, // 56px -> 3.5rem
        ],
        "outlined-medium": [
          "1.5rem", // 24px -> 1.5rem
          { lineHeight: "1.75rem", letterSpacing: "-0.02em" }, // 28px -> 1.75rem
        ],
        subheading: [
          "1.5rem", // 24px -> 1.5rem
          { lineHeight: "1.75rem", letterSpacing: "-0.02em" }, // 28px -> 1.75rem
        ],
        h1: [
          "2.5rem", // 40px -> 2.5rem
          { lineHeight: "3rem", letterSpacing: "-0.02em" }, // 48px -> 3rem
        ],
        h2: [
          "2.25rem", // 36px -> 2.25rem
          { lineHeight: "2.75rem", letterSpacing: "-0.02em" }, // 44px -> 2.75rem
        ],
        h3: [
          "2rem", // 32px -> 2rem
          { lineHeight: "2.5rem", letterSpacing: "-0.02em" }, // 40px -> 2.5rem
        ],
        h4: [
          "1.75rem", // 28px -> 1.75rem
          { lineHeight: "2rem", letterSpacing: "-0.02em" }, // 32px -> 2rem
        ],
        h5: [
          "1.5rem", // 24px -> 1.5rem
          { lineHeight: "1.75rem", letterSpacing: "-0.02em" }, // 28px -> 1.75rem
        ],
        h6: [
          "1.25rem", // 20px -> 1.25rem
          { lineHeight: "1.5rem", letterSpacing: "-0.02em" }, // 24px -> 1.5rem
        ],
        "paragraph-p1": [
          "1rem", // 16px -> 1rem
          { lineHeight: "1.25rem", letterSpacing: "-0.02em" }, // 20px -> 1.25rem
        ],
        "paragraph-p2": [
          "1.25rem", // 20px -> 1.25rem
          { lineHeight: "1.5rem", letterSpacing: "0.02em" }, // 24px -> 1.5rem
        ],
        "paragraph-p3": [
          "1rem", // 16px -> 1rem
          { lineHeight: "1.25rem", letterSpacing: "0.02em" }, // 20px -> 1.25rem
        ],
        "button-text": [
          "0.75rem", // 12px -> 0.75rem
          { lineHeight: "1rem", letterSpacing: "0.02em" }, // 16px -> 1rem
        ],
        "button-text-2": [
          "1.25rem", // 20px -> 1.25rem
          { lineHeight: "1.5rem", letterSpacing: "0.02em" }, // 24px -> 1.5rem
        ],
        underlined: [
          "1rem", // 16px -> 1rem
          { lineHeight: "1.25rem", letterSpacing: "0.02em" }, // 20px -> 1.25rem
        ],
        "custom-20": [
          "1.25rem", // 20px -> 1.25rem
          { lineHeight: "1.5rem", letterSpacing: "-0.02em" }, // 24px -> 1.5rem
        ],
      },
      fontWeight: {
        regular: "400",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-outline": {
          "-webkit-text-stroke": "1px black", // Set outline stroke color and width
          color: "#FFFFFF", // Solid color fill for text to prevent transparency issues
        },
        ".text-outline-black": {
          "-webkit-text-stroke": "1px black",
          color: "#FFFFFF", // Ensures fill is solid white
        },
        ".text-outline-white": {
          "-webkit-text-stroke": "1px white",
          color: "#000000", // Ensures fill is solid black
        },
      });
    }),
  ],
  corePlugins: {
    scrollBehavior: true,
  },
};

export default config;
