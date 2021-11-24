const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: (theme) => ({
        hero: "url('/img/restaurante-14.jpg')",
      }),
      colors: {
        'trovador-primary': '#D9D1B8',
        'trovador-background': '#FBF8F4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
