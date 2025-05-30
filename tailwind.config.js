/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/js/**/*.js',
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      keyframes: {
        scanningText: {
          '0%': {
            width: '100%',
            height: '100%',
            backgroundColor: '#444B55',
            position: 'absolute',
          },
          '25%': {
            width: '75%',
            height: '100%',
            backgroundColor: '#444B55',
            position: 'absolute',
          },
          '50%': {
            width: '50%',
            height: '100%',
            backgroundColor: '#444B55',
            position: 'absolute',
          },
          '75%': {
            width: '25%',
            height: '100%',
            backgroundColor: '#444B55',
            position: 'absolute',
          },
          '100%': {
            width: '0%',
            height: '100%',
            backgroundColor: '#444B55',
            position: 'absolute',
          },
        },
      },
      animation: {
        scanning: 'scanningText 0.25s linear',
      },
      colors: {
        paletteText: {
          primary: '#444B55',
          inactive: '#808C92',
          placeholder: '#8F95B2',
          error: '#EE3124',
          active: '#0092AC',
        },
        dark: {
          800: '#1f0a4d',
          900: '#170739',
        },
        light: {
          800: '#dce3de',
          900: '#f7f7f5',
        },
      },
    },
  },
  plugins: [require('tw-elements/plugin.cjs')],
};
