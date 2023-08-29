/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      iphone: { max: "480px" }, // iPhone 12 portrait width
      // => @media (max-width: 389px) { ... }

      tablet: { min: "481px" },
      // => @media (max-width: 768px) { ... }

      laptop: { min: "768px" },
      // => @media (max-width: 1023px) { ... }

      desktop: { min: "1025px" },
      // => @media (min-width: 1026px) { ... }
    },

    extend: {
      fontFamily: {
        burtons: "burtons",
        libre: "libre baskerville",
        lato: "lato",
        latoBold: "lato-bold",
      },
      colors: {
        bluetone: "#1fb0d8",
        orangetone: "#e9c822",
        navybl: "#152238",
      },
    },
  },
  plugins: [],
};
