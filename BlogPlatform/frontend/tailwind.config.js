/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Ensure all necessary file types are included
  theme: {
    extend: {
      colors: {
        primary: "#2C3E50", // Dark Slate Blue
        secondary: "#1ABC9C", // Turquoise
        accent: "#F39C12", // Golden Orange
        background: "#F5F5F5", // Light Gray
        textPrimary: "#333333", // Dark Charcoal
        textSecondary: "#7F8C8D", // Muted Gray
      },
      fontFamily: {
        heading: ['"Poppins"', "sans-serif"],
        body: ['"Roboto"', "sans-serif"],
        code: ['"Source Code Pro"', "monospace"],
      },
    }, // Extend as needed
  },
  plugins: [], // Plugin usage is correct
};
