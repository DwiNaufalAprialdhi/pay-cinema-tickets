/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    fontFamily: {
      dm_sans: ["DM Sans", "sans-serif"],
    },
    extend: {
      colors: {
        rose: "#BE123C",
        secondary: "#9CA3AF",
      },
    },
  },
  plugins: [],
};
