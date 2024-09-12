import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        "outline-black": "1px 1px 2px black, -1px -1px 2px black",
      },
      colors: {
        "primary-green": "#82B894",
        "primary-cream": "#E0CF9D",
        "primary-yellow": "#FFD900",
        "primary-purple": "#8664C3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "deep-black": "0 6px #000000, 0 6px #000000",
        "deep-cream": "0 6px #E0CF9D, 0 6px  #E0CF9D",
        "deep-green": "0 6px #82B894, 0 6px  #82B894",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
export default config;
