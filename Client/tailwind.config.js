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