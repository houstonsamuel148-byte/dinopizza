/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pizzaRed: '#E31837',
        pizzaOrange: '#FF8A00',
        charcoal: '#1A1A1A',
        cream: '#FFFDF5',
      }
    },
  },
  plugins: [],
}
