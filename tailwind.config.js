/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "display": "var(--display-font)"
      },
      colors:{
        cBlack:{
          '100': '#181A1B',
        },
        cGray :{
          '100': '#2D333A',
        },
        cGreen: {
          '100': '#10a37f',
          '200': '#C2C8D0'
        }
      }
    },
  },
  plugins: [],
}