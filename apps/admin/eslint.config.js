import { viteReactConfig } from "../../eslint.config.js";

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
    ...viteReactConfig,
    files: ["**/*.{js,jsx}"],
    // Admin-specific overrides can be added here
    rules: {
      ...viteReactConfig.rules,
      // Example: Add admin-specific rules if needed
      // "admin-specific-rule": "error",
    },
  },
];
