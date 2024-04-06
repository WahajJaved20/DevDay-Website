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
        headerButtonThree: '#ABAAD7',
        generalCompetitionColor: "#EECCDC",
        roboticsCompetitionColor: "#EDD0FF"
      },
      textColor:{
        headerColorOne : '#088097',
        headerColorTwo : "#003149",
        competitionHeader: "#006984",
        extendedNameColor: "#737373"
      },
      fontFamily: {
        Gotham: ['Gotham', 'sans-serif'],
        circularStd: ['CircularStd', 'sans-serif'],
      },
    },
  },
  plugins: [],
}