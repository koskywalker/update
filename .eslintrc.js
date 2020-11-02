module.exports = {
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: `module`,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [`@typescript-eslint`, `react`, `jsx-a11y`],
  env: {
    browser: true,
    node: true,
  },
  extends: [
    `eslint:recommended`,
    `plugin:react/recommended`,
    `plugin:@typescript-eslint/recommended`,
    `plugin:jsx-a11y/recommended`,
    `prettier`,
    `prettier/react`,
    `prettier/@typescript-eslint`,
  ],
  settings: {
    react: {
      version: `detect`,
    },
  },
  rules: {
    "react/prop-types": `off`,
    quotes: `off`,
    "@typescript-eslint/quotes": [
      2,
      `backtick`,
      {
        avoidEscape: true,
      },
    ],
    indent: [`error`, 2, { SwitchCase: 1 }],
    "react/no-unescaped-entities": `off`,
  },
}
