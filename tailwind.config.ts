import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // screens: {
      //   md: "640px",
      //   lg: "1024px",
      // },
      colors: {
        primary: "#1E40AF",
        accent: "#06B6D4",
        color: "#171717",
        icon: "#06B6D41A",
        card: "#FFFFFF",
        "secondary-01": "#EEF2FF",
        "secondary-02": "#CFFAFE",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        happy: "0px 4px 10px 0px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".web-mx": {
          "@apply mx-4 md:mx-16 lg:mx-32": {},
        },
        ".embla": {
          "@apply overflow-hidden": {},
        },
        ".embla__container": {
          "@apply flex": {},
        },
        ".embla__slide": {
          "@apply min-w-0 flex-none w-full": {},
        },
        ".image": {
          "@apply bg-[url('https://pub-26d044217d7d4467b9ed890eae28cf66.r2.dev/5c003d2ec4.png')] bg-cover bg-center bg-no-repeat":
            {},
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
export default config;
