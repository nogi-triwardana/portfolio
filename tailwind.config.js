/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paletteText: {
          primary: '#444B55',
          inactive: '#808C92',
          placeholder: '#8F95B2',
          error: '#EE3124',
          active: '#0092AC'
        }
      }
    },
  },
  plugins: [],
}
