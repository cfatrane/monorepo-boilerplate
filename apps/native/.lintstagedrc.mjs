import baseConfig from "../../.lintstagedrc.mjs";

export default {
  "*.{js,jsx,ts,tsx}": "expo lint",
  ...baseConfig,
};
