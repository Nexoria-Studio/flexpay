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
        text: "#646768",
      },
    },
  },
  plugins: [],
} satisfies Config;
