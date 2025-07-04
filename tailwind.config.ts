import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#F2DCB1",
        champagne: "#F5EEE2",
        "rich-black": "#04080F",
      },
      backgroundImage: {
        fuzz: "url('/images/fuzz.png')",
        denim: "url('/images/denim.webp')",
        fuzz_tinted: "url('/images/fuzz_tinted.png')",
      },
      boxShadow: {
        "3d": "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        normal: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
      },
      keyframes: {
        "card-in": {
          "0%": { transform: "rotateX(-90deg) scale(0.8)", opacity: "0" },
          "100%": { transform: "rotateX(0deg) scale(1)", opacity: "1" },
        },
        "card-out": {
          "0%": { transform: "rotateX(0deg) scale(1)", opacity: "1" },
          "100%": { transform: "rotateX(90deg) scale(0.8)", opacity: "0" },
        },
      },
      animation: {
        "card-in": "card-in 0.5s ease-out forwards",
        "card-out": "card-out 0.5s ease-in forwards",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
export default config;
