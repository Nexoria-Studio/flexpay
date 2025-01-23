import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#081013",
        foreground: "var(--foreground)",
        primary: "#7AC52D",
        secondary: " #407BFF",
        "primary-light": "var(--primary-light)",
        text: "#646768",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(99.3deg, #7AC52D 0.57%, #407BFF 110.11%)",
      },
      fontFamily: {
        montserrat: "var(--font-montserrat)",
        outfit: "var(--font-outfit)",
        roboto: "var(--font-roboto)",
        inter: "var(--font-inter)",
      },
      animation: {
        "popup-open": "popupOpen 0.3s ease-out",
        "popup-close": "popupClose 0.3s ease-in",
      },
      keyframes: {
        popupOpen: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        popupClose: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.8)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
