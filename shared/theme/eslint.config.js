import { reactConfig } from "../../eslint.config.js";

export default [
  {
    ignores: [
      "dist", 
      "build",
      "node_modules",
      "coverage",
    ],
  },
  {
    ...reactConfig,
    files: ["**/*.{js,jsx}"],
    // Theme-specific overrides can be added here
    rules: {
      ...reactConfig.rules,
      // Example: Add theme-specific rules if needed
      // "theme-specific-rule": "error",
    },
  },
];
