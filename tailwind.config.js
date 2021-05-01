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
    extend: {
      colors: {
        darkestgray: "#18181b",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
