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
        blu: "#134857",
        "dark-blu": "#040720",
        accent: "#EB88D2",
      },
      backgroundImage: {
        "hero-bg": `url('/images/hero-bg.png')`,
      },
    },
  },
  plugins: [],
} satisfies Config;
