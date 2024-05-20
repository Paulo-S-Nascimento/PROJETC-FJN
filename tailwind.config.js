
console.log('Tailwind CSS config loaded');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'], 
  theme: {
    extend: {
      borderStyle: ['before'],
      borderWidth: ['before'],
      width: ['before'],
      height: ['before'],
      content: ['before'],
    },
  },
  plugins: [],
}