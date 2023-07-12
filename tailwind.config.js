/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xsm: "350px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
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
