/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      left: {
        "42": "left: 12rem"
      },
      colors: {
        dashboard: {
          gray: {
            50: "#A3AED0",
            100: "#F4F7FE",
          },
          purple: {
            300: "#4318FF",
          }
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
    },
  },
  plugins: [],
};
