const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        noto: ['"Noto Sans JP"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
};
