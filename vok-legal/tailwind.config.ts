import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0A0B",
        ink: "#141416",
        charcoal: "#1D1D20",
        bone: "#F5F3EE",
        parchment: "#EDE9DF",
        gold: {
          DEFAULT: "#C9A227",
          light: "#E8C766",
          dim: "#8A701C",
        },
        slate: "#8A8A8F",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E8C766 0%, #C9A227 50%, #8A701C 100%)",
      },
      boxShadow: {
        seal: "0 0 0 1px rgba(201,162,39,0.35), 0 20px 60px -20px rgba(201,162,39,0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "seal-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease forwards",
        "seal-rotate": "seal-rotate 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
