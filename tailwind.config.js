const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        lightBlue: colors.lightBlue,
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
      },
      fontFamily: {
        accent: ["Adumu"],
      },
    },
    zIndex: {
      "-10": "-10",
    },
  },
  variants: {},
  plugins: [],
}
