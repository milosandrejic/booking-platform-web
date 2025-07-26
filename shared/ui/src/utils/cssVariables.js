// Utility to generate CSS custom properties from theme
import { theme } from "@booking-platform-shared/theme";

export const generateCSSVariables = () => {
  const cssVariables = {};
  
  // Colors
  Object.entries(theme.colors).forEach(([colorGroup, colors]) => {
    if (typeof colors === "object" && colors !== null) {
      Object.entries(colors).forEach(([colorName, colorValue]) => {
        cssVariables[`--color-${colorGroup}-${colorName}`] = colorValue;
      });
    }
  });
  
  // Typography
  Object.entries(theme.typography).forEach(([variant, styles]) => {
    if (typeof styles === "object" && styles !== null) {
      Object.entries(styles).forEach(([property, value]) => {
        cssVariables[`--typography-${variant}-${property}`] = value;
      });
    }
  });
  
  // Spacing
  Object.entries(theme.spacing).forEach(([key, value]) => {
    cssVariables[`--spacing-${key}`] = value;
  });
  
  // Border radius
  Object.entries(theme.borderRadius).forEach(([key, value]) => {
    cssVariables[`--border-radius-${key}`] = value;
  });
  
  // Font family
  cssVariables["--font-family"] = theme.fontFamily;
  
  // Font weights
  Object.entries(theme.fontWeights).forEach(([key, value]) => {
    cssVariables[`--font-weight-${key}`] = value;
  });
  
  return cssVariables;
};

export const injectCSSVariables = () => {
  if (typeof document === "undefined") {
    return; // SSR check
  }
  
  const variables = generateCSSVariables();
  const cssText = Object.entries(variables)
    .map(([property, value]) => `${property}: ${value};`)
    .join("\n  ");
  
  const styleText = `:root {\n  ${cssText}\n}`;
  
  // Check if style element already exists
  let styleElement = document.getElementById("theme-css-variables");
  
  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.id = "theme-css-variables";
    document.head.appendChild(styleElement);
  }
  
  styleElement.textContent = styleText;
};

export default generateCSSVariables;
