import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F0F0F0",
        foreground: "#121212",
        border: "#121212",
        muted: "#E0E0E0",
        red: "#D02020",
        blue: "#1040C0",
        yellow: "#F0C020",
        cream: "#FFF9C4",
      },
      boxShadow: {
        bauhausSm: "4px 4px 0px 0px #121212",
        bauhausMd: "6px 6px 0px 0px #121212",
        bauhausLg: "8px 8px 0px 0px #121212",
      },
      fontFamily: {
        display: ["var(--font-outfit)"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};

export default config;
