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
      },
    },
  },
  plugins: [],
} satisfies Config;
