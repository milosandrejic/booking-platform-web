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
    // Owner-specific overrides can be added here
    rules: {
      ...nextReactConfig.rules,
      // Example: Add owner-specific rules if needed
      // "owner-specific-rule": "error",
    },
  },
];
