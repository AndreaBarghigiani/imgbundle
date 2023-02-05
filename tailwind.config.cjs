/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        headings: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "shadow-pulse": "2s infinite shadow-pulse",
      },
      keyframes: {
        "shadow-pulse": {
          "30%": {
            "box-shadow": "0 0 0 0 rgba(255, 255, 255, .7)",
          },
          "100%": {
            "box-shadow": "0 0 0 8px rgba(255, 255, 255, 0)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
