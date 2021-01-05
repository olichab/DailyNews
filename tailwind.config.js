module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        default: "5rem",
        sm: "2rem",
        lg: "10rem",
        xl: "15rem",
        "2xl": "20rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
