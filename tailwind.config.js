/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        headerButtonOne: '#9BD7E6',
        headerButtonTwo : "#FE9F85",
        headerButtonThree: '#ABAAD7'
      },
      textColor:{
        headerColorOne : '#088097',
        headerColorTwo : "#003149",
      },
      fontFamily: {
        Gotham: ['Gotham', 'sans-serif'],
        circularStd: ['CircularStd', 'sans-serif'],
      },
    },
  },
  plugins: [],
}