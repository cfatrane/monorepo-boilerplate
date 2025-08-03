/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
export const config = {
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  objectWrap: "preserve",
  bracketSameLine: false,
  arrowParens: "always",
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: ["^@core/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
