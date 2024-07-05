const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        dashboard: {
          gray: {
            50: "#A3AED0",
            100: "#F4F7FE",
          },
          purple: {
            300: "#4318FF",
          },
        },
        landing: {
          blue: {
            100: "#00218F",
            200: "#152C5B",
          },
          turquoise: "#37E2D5",
          gray: {
            50: "#969696",
            100: "#C4C4C4",
            200: "#343434",
            300: "#0C0047",
          },
          purple: {
            100: "#F2F2FF",
            200: "#6A4BFF",
          },
        },
      },
      animation: {
        enter: "enter 200ms ease-out",
        "slide-in": "slide-in 1.2s cubic-bezier(.41,.73,.51,1.02)",
        leave: "leave 150ms ease-in forwards",
      },
      keyframes: {
        enter: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        leave: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "100%": { transform: "scale(0.9)", opacity: 0 },
        },
        "slide-in": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
