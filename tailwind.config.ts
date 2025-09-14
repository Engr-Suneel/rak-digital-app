/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rak: {
          primary: "#10233E",
          red: "#BF1313",
          "light-blue": "#0C7DE5",
          "gradient-start": "#EB3642",
          "gradient-end": "#990808",
        },
        gray: {
          light: "#F9F9F9",
          medium: "#D1D5DB",
          text: "#606367",
          border: "#E6E6E6",
        },
      },
      fontFamily: {
        arabic: ["Arial", "sans-serif"],
        english: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      spacing: {
        sidebar: "240px",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-in": "slideIn 0.3s ease-out",
        "scale-up": "scaleUp 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
