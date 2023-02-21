/** @type {import('tailwindcss').Config} */
const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#4299E1",
    },
  },
  plugins: [],
};
