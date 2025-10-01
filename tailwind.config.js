/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003B5A',
        secondary: '#FC4798',
        accent: '#00AECF',
        light: '#F9FAFB',
        dark: '#0F172A',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",   // 👈 changed from 1280 → 1200
        "2xl": "1400px" // 👈 optional tweak, wider desktops
      },
    },
  },
  plugins: [],
};
