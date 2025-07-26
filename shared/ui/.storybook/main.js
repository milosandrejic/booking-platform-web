/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links", "@storybook/addon-essentials"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  viteFinal: async (config) => {
    // Ensure JSX files are properly handled
    config.esbuild = config.esbuild || {};
    config.esbuild.jsx = "automatic";
    
    return config;
  },
};

export default config;
