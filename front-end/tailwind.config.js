/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gradient: "var(--gradient)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        ring: "hsl(var(--ring))",
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
    },
  },
  plugins: [],
};
