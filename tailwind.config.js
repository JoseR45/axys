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
    },
    fontFamily: {
      'compressed': ['Helvetica Compressed'],
      'helvetica': ['Helvetica'],
      
    }
  },
  plugins: [],
}