/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#9BB0BB',
      secondary: '#7CAD9D',
    }
  },
  plugins: [
    daisyui,
  ],

}