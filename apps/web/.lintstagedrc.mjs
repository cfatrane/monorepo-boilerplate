import baseConfig from "../../.lintstagedrc.mjs";

export default {
  "*.{js,jsx,ts,tsx}": () => "bun run lint",
  ...baseConfig,
};
