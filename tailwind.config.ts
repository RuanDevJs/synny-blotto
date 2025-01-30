import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animateFromDownToUp: {
          from: {
            opacity: "0",
            transform: "translate3d(0, -50px, 0)",
          },
          to: {
            opacity: "1",
            transform: "translate3d(0, 0px, 0)",
          },
        },
        animateFromUpToDown: {
          from: {
            opacity: "0",
            transform: "translate3d(0, 50px, 0)",
          },
          to: {
            opacity: "1",
            transform: "translate3d(0, 0px, 0)",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        ["fira-sans-condensed"]: "var(--font-fira-sans-condensed)",
        overpass: "var(--font-overpass)",
      },
      textColor: {
        colorBase: "#251B37",
      },
      animation: {
        animateFromDownToUp: "animateFromDownToUp .72s forwards",
        animateFromUpToDown: "animateFromUpToDown .72s forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
