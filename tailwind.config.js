/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        customerButtonColor: "#FFCDEA",
        navBarColor: "#86469C",
        customerButtonColorHover: "#FB9AD1",
      },
    },
  },
  plugins: [],
};
