/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}",  'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      colors: {
        "primary" : "#4284A6",
        'secodary' : '#646464',
        'lighty' : '#EAECF0'
      },
      backgroundColor : {
        "primary" : '#4284A6',
        'secondary' : '#646464',
        'blue-dark' : '#101828'
      },
      borderColor : {
        "primary" : '#4284A6',
        'secondary' : '#646464'
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

