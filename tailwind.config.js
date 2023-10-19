/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customOne: ['Chakra Petch', 'sans-serif'],
        customTwo: ['Inconsolata', 'monospace'],
        customThree:['Pixelify Sans', 'cursive']
      },
      blur: {
        efecto: '100px', // Puedes ajustar el valor del desenfoque según tus necesidades
      }
    },
  },
  plugins: [],
}