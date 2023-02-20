/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      oren1: '#dba980',
      oren2: '#e9c9af',
    },
    extend: {},
  },
  plugins: [require("daisyui"),

  require("flowbite/plugin"),

  require('@tailwindcss/typography'),
  ],

}