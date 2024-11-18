/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000000',       
        'white': '#FFFFFF', 
        'tertiary': '#D9D9D9', 
        'primary': '#1D1D1B', 
        'secundary': 'rgba(255, 255, 255, 0.6)',
      },
      fontFamily :{
        'helvetica': ['HelveticaCompressed', 'sans-serif'], //Added Helvetica Compressed font type by LeudiX
      },
      backgroundImage:{
        'border-gradient':'linear-gradient(90deg, #f1f1f1 0.5%, #222325 75%)',
        'hr-linear-gradient':'linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(153, 153, 153) 50%, rgb(255, 255, 255) 100%)',
      }
    },
  },
  plugins: [],
}