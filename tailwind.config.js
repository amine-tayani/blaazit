module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.jsx", "./src/**/*.js", "./index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Quicksand", "sans-serif"],
      serif: ["Montserrat", "serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
