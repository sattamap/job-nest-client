/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        edu: "'Edu TAS Beginner', cursive",
      },
    },
  },
  plugins: [require("daisyui")],
}



