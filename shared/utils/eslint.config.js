import { nodeConfig } from "../../eslint.config.js";

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
    ...nodeConfig,
    files: ["**/*.{js,jsx}"],
    // Utils-specific overrides can be added here
    rules: {
      ...nodeConfig.rules,
      // Example: Add utils-specific rules if needed
      // "utils-specific-rule": "error",
    },
  },
];
