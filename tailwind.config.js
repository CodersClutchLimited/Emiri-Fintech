/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.{ejs,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#FA64FF',
        'dark-blue': '#00008B',
        'teal': '#2E8B57',
        'sea-green': '#2E8B57',
        'spring-green': '#00FF7F',
        'lime-green': '#00FF00'
      },
      spacing: {
        '5.5': '22px', 
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
