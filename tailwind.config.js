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
        twitter: "#1da1f2",
        facebook: "#1877f2",
        hatena: "#00a4de",
        pocket: "#d81b60",
        line: "#00c300",
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
      boxShadow: {
        custom: "0 0 10px 3px rgba(0, 0, 0, 0.2)",
      },
      typography: (theme) => {
        return {
          DEFAULT: {
            css: {
              a: {
                color: theme("colors.cyan.600"),
              },
            },
          },
        }
      },
      backgroundImage: () => {
        return {
          bookmark: "url('/images/icon-bookmark.svg')",
        }
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
  variants: {
    extend: {
      opacity: ["disabled"],
      backgroundColor: ["disabled", "hover", "focus"],
      cursor: ["disabled", "hover"],
    },
  },
  // plugins: [require("@tailwindcss/typography")],
}
