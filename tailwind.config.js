module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rgray: {
          50: "#838492",
          100: "#787885",
          200: "#6C6C78",
          300: "#60606B",
          400: "#55555E",
          500: "#494951",
          600: "#3D3D44",
          700: "#323237",
          800: "#26262A",
          900: "#1A1A1D",
        },
        accent: "#c3073f",
        daccent: "#6f2232",
      },
    },
  },
  plugins: [],
};
