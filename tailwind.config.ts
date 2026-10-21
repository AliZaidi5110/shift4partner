import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        nav: "1100px",
      },
      colors: {
        brand: {
          navy: "#0A1A33",
          navyDark: "#060F1E",
          navySurface: "#0F2447",
          navyCard: "#132D59",
          blue: "#1E6BFF",
          blueHover: "#1657D9",
          accent: "#4DA3FF",
          cyan: "#38BDF8",
          emerald: "#10B981",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse at 80% 20%, #1E6BFF 0%, #0A1A33 65%, #060F1E 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
        "blue-gradient": "linear-gradient(135deg, #4DA3FF 0%, #1E6BFF 100%)",
        "gold-gradient": "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
