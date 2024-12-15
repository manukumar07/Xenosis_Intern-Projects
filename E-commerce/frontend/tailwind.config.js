/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A202C", // Dark Gray
        secondary: "#2B6CB0", // Blue
        accent: "#ECC94B", // Yellow
        background: "#F7FAFC", // Light Gray
        text: "#2D3748", // Dark Text Gray
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Adding Roboto font
      },
    },
  },
  plugins: [],
};
