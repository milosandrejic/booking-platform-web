import { nextReactConfig } from "../../eslint.config.js";

export default [
  {
    ignores: [
      ".next", 
      "out", 
      "dist", 
      "build",
      "node_modules",
      "coverage",
    ],
  },
  {
    ...nextReactConfig,
    files: ["**/*.{js,jsx}"],
    // Storefront-specific overrides can be added here
    rules: {
      ...nextReactConfig.rules,
      // Example: Add storefront-specific rules if needed
      // "storefront-specific-rule": "error",
    },
  },
];
