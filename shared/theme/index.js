// Shared theme system for booking platform
// Modern booking.com inspired design with blue primary color

// Main theme export
export { default as theme } from './theme.js';

// Individual system exports  
export { colors } from './colors.js';
export { typography, fontFamily, fontWeights, fontSizes, lineHeights } from './typography.js';
export { spacing, borderRadius, shadows, breakpoints } from './spacing.js';

// Styled-components providers
export { default as ThemeProvider } from './ThemeProvider.jsx';
export { default as GlobalStyle } from './GlobalStyle.jsx';
