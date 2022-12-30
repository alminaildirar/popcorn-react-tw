/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        tabBox: "0px 2px 2px rgba(255, 255, 255, 0.07)",
        tabBox2: "0px -1px 43px -25px white",
        card: "0px 0px 40px -31px white;"
      },
      colors: {
        primary: "#0e1217",
      },
    },
  },
  plugins: [],
};
