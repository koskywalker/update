module.exports = {
  extends: "stylelint-config-recommended",
  plugins: ["stylelint-order"],
  rules: {
    "order/properties-alphabetical-order": true,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["extends", "tailwind"],
      },
    ],
    "block-no-empty": null,
    "unit-whitelist": ["em", "rem", "s"],
  },
}
