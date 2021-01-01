const colors = require("tailwindcss/colors")
const { screens } = require("tailwindcss/defaultTheme")

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
        main: [
          "-apple-system",
          "Segoe UI",
          "游ゴシック体",
          "Yu Gothic",
          "yugothic",
          "ヒラギノ角ゴ Pro",
          "ヒラギノ角ゴ W3",
          "Hiragino Kaku Gothic Pro",
          "メイリオ",
          "meiryo",
          "sans-serif",
        ],
        sub: [
          "Quicksand",
          "Helvetica",
          "Arial",
          "Hiragino Kaku Gothic ProN",
          "Hiragino Sans",
          "yugothic",
          "Yu Gothic",
          "メイリオ",
          "meiryo",
          "sans-serif",
        ],
        accent: ["Adumu"],
      },
    },
    screens: {
      xs: "375px",
      ...screens,
    },
    zIndex: {
      "-10": "-10",
    },
  },
  variants: {},
  plugins: [],
}
