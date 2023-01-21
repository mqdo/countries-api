/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neutral: {
          50: 'hsl(0, 0%, 100%)', // dark mode text & light mode elements
          100: 'hsl(0, 0%, 98%)', // light mode background
          400: 'hsl(0, 0%, 52%)', // light mode input
          600: 'hsl(209, 23%, 22%)', // dark mode element
          700: 'hsl(207, 26%, 17%)', // dark mode background
          900: 'hsl(200, 15%, 8%)', // light mode text
        },
      },
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
