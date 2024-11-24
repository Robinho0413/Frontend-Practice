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
        monextBlack: ["var(--font-monext-black)"],
        monextBlackItalic: ["var(--font-monext-black-italic)"],
        monextLight: ["var(--font-monext-light)"],
        monextLightItalic: ["var(--font-monext-light-italic)"],
        monextRegular: ["var(--font-monext-regular)"],
        monextRegularItalic: ["var(--font-monext-regular-italic)"],
      },
      backgroundImage: {
        'hero': "url('/images/background.webp')",
      },
      backgroundSize: {
        'hero': 'cover',
      },
    },
  },
  plugins: [],
} satisfies Config;
