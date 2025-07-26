// Main theme export
export { default as theme } from "./theme.js";

// Individual system exports  
export { colors } from "./colors.js";
export { typography, fontFamily, fontWeights, fontSizes, lineHeights } from "./typography.js";
export { spacing, borderRadius, shadows, breakpoints } from "./spacing.js";

// React Context providers and hooks
export { default as ThemeProvider, useTheme } from "./ThemeProvider.jsx";
export { default as GlobalStyle } from "./GlobalStyle.jsx";
