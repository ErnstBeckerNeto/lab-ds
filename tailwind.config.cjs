/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        '2xl': 32,
    },
    colors: {
        transparent: 'transparent',

        'black-1000': '#000000',
        'white-1000': '#ffffff',

        gray: {
            900: '#121214',
            800: '#202024',
            400: '#7C7C8A',
            200: '#C4C4CC',
            100: '#E1E1E6',
        },

        red: {
            100: '#140005',
            200: '#27000A',
            300: '#3B000F',
            400: '#4E0015',
            500: '#62001A',
            600: '#76001F',
            700: '#890024',
            800: '#9D0029',
            900: '#B1002E',
            1000: '#C40034',
            1100: '#D80039',
            1200: '#EB003E',
            1300: '#FF0043',

        }

    },
    extend: {
        fontFamily: {
            sans: 'Inter, sans-serif'
        },
    },
  },
  plugins: [],
}
