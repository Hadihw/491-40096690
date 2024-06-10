import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
  ],
  theme: {
    extend: {
      keyframes: {
      },
      animation: {
      },
      colors: {
        medium: "#A61D74",
        dark: "#561A7A",
        light: "#DD4664",
        gullGray: "#9CA5B4",
        Manatee: "#8F96A7",
      },
      backgroundImage: {
        "landingPageBackground": "url('/assets/images/landingPageBackground.png')"
      },
      fontFamily: {
        axiom: ["Axiom", "sans-serif"],
      },
    },
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',
      'md': '834px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [
    require("flowbite/plugin"),
    require("daisyui"),
  ],
};

export default config;