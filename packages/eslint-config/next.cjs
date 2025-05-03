/* Custom ESLint configuration for use with Next.js apps. */
/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["next/core-web-vitals", "next/typescript", "prettier"],
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
