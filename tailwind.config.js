/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.mdx"],
  theme: {
    extend: {
      colors: {
        bg: "#121212",
        card: "#1E1E1E",
        "text-primary": "#F5F5F5",
        "text-muted": "#A1A1AA",
        accent: "#EA580C",
        "accent-hover": "#F97316",
        border: "#2A2A2A",
      },
      fontFamily: {
        heading: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      maxWidth: { container: "1200px" },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
