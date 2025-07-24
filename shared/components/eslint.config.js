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
    // Components-specific overrides can be added here
    rules: {
      ...reactConfig.rules,
      // Example: Add components-specific rules if needed
      // "components-specific-rule": "error",
    },
  },
];
