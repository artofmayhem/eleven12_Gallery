//./postcss.config.js

module.exports = {
  plugins: [
    // ...
    require("tailwindcss")("./src/tailwind.config.js"),
    require("autoprefixer")
    // ...
  ]
}

// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   }
// }