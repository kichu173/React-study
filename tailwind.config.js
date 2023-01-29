/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // What files will be using the tailwind classes.
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

// ? What is theme, plugins in above object.
// * We configure .postcssrc to tell our bundler(parcel) that while you are bundling up the project(prod/dev build) we will be using tailwind, so compile our tailwind css into normal css.
