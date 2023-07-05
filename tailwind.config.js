/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "abstract" : "url('/src/assets/abstract-glass.jpeg')"
      }
    },
  },
  plugins: [],
}