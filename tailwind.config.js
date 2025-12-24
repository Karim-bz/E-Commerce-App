/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",     // deep indigo
        secondary: "#facc15",   // bright yellow
        accent: "#f43f5e",      // pinkish-red
        light: "#f9fafb",       // soft gray
        dark: "#1f2937",        // dark gray
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
