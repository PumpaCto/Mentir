/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff9900", // Altın tonu, logona uyumlu
        secondary: "#0b0f19", // Uzay siyahı
        accent: "#00bfff", // Mavi detaylar
      },
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
        heading: ['"Orbitron"', "sans-serif"]
      },
      backgroundImage: {
        'stars': "url('/images/background-stars.jpg')"
      },
      animation: {
        float: "float 6s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" }
        }
      }
    },
  },
  plugins: [],
  darkMode: "class"
}
