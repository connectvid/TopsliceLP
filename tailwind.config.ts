import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
      },
      colors: {
        brand: {
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          400: "#FD8C40",
          500: "#FC6700",
          600: "#E55D00",
          700: "#C24E00",
        },
      },
      keyframes: {
        aurora: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -20px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 15px) scale(0.95)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        aurora: "aurora 15s ease-in-out infinite",
        "aurora-slow": "aurora 20s ease-in-out infinite reverse",
        "aurora-mid": "aurora 18s ease-in-out infinite 5s",
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
