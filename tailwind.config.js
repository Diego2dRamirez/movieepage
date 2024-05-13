/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "DarkBlue": "#0d253f",
        "LightBlue": " #01b4e4",
        "LightGreen": "#90cea1",
      },
      fontFamily: {
        "Poppins": ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

