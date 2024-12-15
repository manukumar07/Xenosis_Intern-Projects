/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  extend: {
    colors: {
      primary: "#1A2B3C", // Deep Midnight Blue
      secondary: "#263445", // Soft Charcoal Blue
      background: "#F4F7FA", // Soft Cloud Gray
      accent: "#4A90E2", // Crisp Sky Blue
      text: {
        primary: "#2C3E50", // Dark Slate
        secondary: "#607D8B", // Cool Gray
      },
      chart: {
        blue: "#4A90E2", // Primary Blue
        green: "#2ECC71", // Emerald Green
        orange: "#F39C12", // Warm Amber
        purple: "#8E44AD", // Deep Lavender
        red: "#E74C3C", // Soft Crimson
      },
    },
  },
  plugins: [],
};
