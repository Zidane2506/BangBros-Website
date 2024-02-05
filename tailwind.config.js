/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content:
    ["./src/**/*.{html,js}",
      "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    fontFamily:{
      'Poppins' : ['Poppins'],
      'Monospace' : ['Space Mono']
    }
  },
  plugins: [require('flowbite/plugin')],
}

