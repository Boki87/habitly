/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-green': '#BCE29E',
        'app-lime': '#E5EBB2',
        'app-rose': '#F8C4B4',
        'app-pink': '#FF8787',
        'app-brown': '#FEBE8C',
        'app-blue': '#A3DDDD',
        'app-ice': '#ADCECE',
      },
      screens: {
        standalone: { raw: "(display-mode: standalone)" }
      }
    },
  },
  plugins: [],
}
