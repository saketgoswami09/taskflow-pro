import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",          // ← enables .dark class-based dark mode
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#6366f1",
        surface: "var(--surface)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
