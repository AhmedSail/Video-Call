/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playFair: ["Playfair Display", "serif"],
      },
      colors: {
        primary: "#6E26A7",
        secondary: "#FF2148",
      },
      backgroundImage: {
        customGradient:
          "linear-gradient(90deg, #44ff9a -0.55%, #440bff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
      },
      container: {
        center: true,
        padding: {
          Default: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
