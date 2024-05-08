/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
    },
    extend: {
      colors: {
        primary: '#ff7900',
        secondary: '#383838',
        backgroundColor: '#262626'
      },
      fontFamily: {
        sans: ['Inter'],
      }
    }
    
  },
  plugins: [],
}

