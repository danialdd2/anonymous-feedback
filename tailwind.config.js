module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50", // رنگ اصلی
        secondary: "#FF5722", // رنگ ثانویه
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'], // فونت‌های ترند
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      blur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
