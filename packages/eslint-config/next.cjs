const baseConfig = require("./base.cjs");

/* Custom ESLint configuration for use with Next.js apps. */
/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...baseConfig,
  root: true,
  extends: [
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "next/typescript",
    "prettier",
  ],
  plugins: ["react", "@typescript-eslint", "@next/next"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    serviceworker: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    // Tu peux ajouter d'autres overrides ici si besoin
  },
};
