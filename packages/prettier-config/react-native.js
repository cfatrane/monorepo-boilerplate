import { config as baseConfig } from "./.prettierrc.js";

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
export const reactNativeConfig = {
  ...baseConfig,
  importOrder: [
    "^react(.*)$",
    "^react-native$",
    "^react-native(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^@/api/(.*)$",
    "^@/assets/(.*)$",
    "^@/db/(.*)$",
    "^@/containers/(.*)$",
    "^@/components/(.*)$",
    "^@/config/(.*)$",
    "^@/constants/(.*)$",
    "^@/context/(.*)$",
    "^@/features/(.*)$",
    "^@/hooks/(.*)$",
    "^@/i18n/(.*)$",
    "^@/lib/(.*)$",
    "^@/navigation/(.*)$",
    "^@/routes/(.*)$",
    "^@/routing/(.*)$",
    "^@/services/(.*)$",
    "^@/schema/(.*)$",
    "^@/styles/(.*)$",
    "^@/types/(.*)$",
    "^@/utils/(.*)$",
    "^[./]",
  ],
};
