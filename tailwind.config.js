/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#E1F0DA",
        grass: "#4FBA6F",
        pond: "#2D9596",
        abyss: "#265073",
        chili: "#E64C3C",
        mud: "#A7A37E",
        gold: "#FFC436",
      },
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        saira: ["Saira Condensed", "sans-serif"],
        mhoko: ["Mhoko", "sans-serif"],
        jeko: ["Jeko", "sans-serif"],
        jekom: ["Jeko Medium", "sans-serif"],
      },
    },
  },

  plugins: [],
};
