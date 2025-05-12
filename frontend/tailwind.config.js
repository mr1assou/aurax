/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },

    },
    colors: {
      brown:'#b87c4c',
      black: '#000000',
      white: '#FFFFFF',
      blight:'#303030',
      grey:'#b0a8b9',
      greylight:'#b0a8b9',
      red:'#FF0000'
    },
    screens: {
      'xs': '500px',
      'sm': '580px',
      'lg':'620px',
      'xl':'1000px',
      'max':'1360px',
      '3xl':'1400px'
    }
  },
  plugins: [],
}

