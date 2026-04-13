import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-bg": "#04040e",
        "surface": "#080820",
        "blue-glow": "#2563eb",
        "cyan-glow": "#06b6d4",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(37,99,235,0.3)" },
          "100%": { boxShadow: "0 0 50px rgba(6,182,212,0.5)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
