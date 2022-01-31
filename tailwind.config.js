const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: () => ({
        hero: "url('/img/restaurante-14.jpg')",
      }),
      colors: {
        'trovador-primary': '#D9D1B8',
        'trovador-background': '#FBF8F4',
      },
    },
  },
  plugins: [],
}
