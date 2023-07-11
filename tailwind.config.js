/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  maxWidth: {
    container: "1440px",
  },
  theme: {
    extend: {
      colors: {
        main: "#C30D1C",
        ash: {
          900: "#A4A4A4",
          200: "#011014",
        },
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
