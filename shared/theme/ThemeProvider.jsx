"use client";

import { createContext, useContext, useEffect } from "react";
import { theme } from "./theme.js";
import GlobalStyle from "./GlobalStyle.jsx";

// Create theme context
const ThemeContext = createContext(theme);

// Hook to use theme in components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Helper function to inject CSS variables
const injectCSSVariables = (themeObject) => {
  if (typeof document === "undefined") {
    return; // SSR check
  }
  
  const cssVariables = {};
  
  // Colors
  Object.entries(themeObject.colors).forEach(([colorGroup, colors]) => {
    if (typeof colors === "object" && colors !== null) {
      Object.entries(colors).forEach(([colorName, colorValue]) => {
        cssVariables[`--color-${colorGroup}-${colorName}`] = colorValue;
      });
    }
  });

  // Simple Color Variables - Map your theme to clean variable names
  cssVariables["--primary"] = themeObject.colors.primary.main;
  cssVariables["--on-primary"] = themeObject.colors.primary.contrastText;
  cssVariables["--secondary"] = themeObject.colors.secondary.main;
  cssVariables["--error"] = themeObject.colors.error.main;
  cssVariables["--background"] = themeObject.colors.background.default;
  cssVariables["--on-background"] = themeObject.colors.text.primary;
  cssVariables["--surface"] = themeObject.colors.background.paper;
  cssVariables["--on-surface"] = themeObject.colors.text.primary;
  cssVariables["--on-surface-variant"] = themeObject.colors.text.secondary;
  cssVariables["--outline"] = themeObject.colors.grey[300];
  
  // Typography
  Object.entries(themeObject.typography).forEach(([variant, styles]) => {
    if (typeof styles === "object" && styles !== null) {
      Object.entries(styles).forEach(([property, value]) => {
        cssVariables[`--typography-${variant}-${property}`] = value;
      });
    }
  });
  
  // Spacing
  Object.entries(themeObject.spacing).forEach(([key, value]) => {
    cssVariables[`--spacing-${key}`] = value;
  });
  
  // Border radius
  Object.entries(themeObject.borderRadius).forEach(([key, value]) => {
    cssVariables[`--border-radius-${key}`] = value;
  });
  
  // Font family
  cssVariables["--font-family"] = themeObject.fontFamily;
  
  // Font weights
  Object.entries(themeObject.fontWeights).forEach(([key, value]) => {
    cssVariables[`--font-weight-${key}`] = value;
  });
  
  const cssText = Object.entries(cssVariables)
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

// React Context theme provider
export const ThemeProvider = ({ children, customTheme, includeGlobalStyles = true, injectCSSVars = true }) => {
  const themeValue = customTheme || theme;
  
  useEffect(() => {
    if (injectCSSVars) {
      injectCSSVariables(themeValue);
    }
  }, [themeValue, injectCSSVars]);
  
  return (
    <ThemeContext.Provider value={themeValue}>
      {includeGlobalStyles && <GlobalStyle />}
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
