import baseConfig from '../../.lintstagedrc.mjs';

export default {
  '*.{js,jsx,ts,tsx}': 'next lint --fix .',
  ...baseConfig,
};
