/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "pitch":"#D6966A",
        "black": "#151515",
        "typography": "#A0A0A0"
      }
    },
  },
  plugins: [],
}