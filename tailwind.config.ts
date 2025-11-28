import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // <--- Add this line!
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "glass-bg": "var(--glass-bg)",
        "glass-border": "var(--glass-border)",
      }
    },
  },
  plugins: [],
};
export default config;