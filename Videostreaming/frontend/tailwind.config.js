/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
      primary: '#6B46C1',    // Deep Purple
      secondary: '#38B2AC',  // Teal
      background: '#1A202C', // Dark Blue-Gray
      text: '#E2E8F0',       // Light Gray
      accent: '#F687B3'      // Soft Pink
  };
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
