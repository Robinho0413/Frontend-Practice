import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        monextBlack: ["var(--font-monext-black)", "sans-serif"],
        monextBlackItalic: ["var(--font-monext-black-italic)", "sans-serif"],
        monextLight: ["var(--font-monext-light)", "sans-serif"],
        monextLightItalic: ["var(--font-monext-light-italic)", "sans-serif"],
        monextRegular: ["var(--font-monext-regular)", "sans-serif"],
        monextRegularItalic: ["var(--font-monext-regular-italic)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
