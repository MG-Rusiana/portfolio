/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropFilter: ['blur(20px)'],
      colors:{
        bg: "#343535",
        t1: "#EFC980",
      },
      fontFamily: {
        'jersey': ['Jersey 25', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {
      backdropFilter: ['responsive'],
    },
  },
  plugins: [],
}

