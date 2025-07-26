"use client";

import { useEffect } from "react";
import { useTheme } from "./ThemeProvider.jsx";

// Global styles as a React component that injects CSS
export const GlobalStyle = () => {
  const theme = useTheme();

  useEffect(() => {
    // Create or update the global style element
    let styleElement = document.getElementById("booking-platform-global-styles");
    
    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = "booking-platform-global-styles";
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@` +
      `0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
      
      * {
        box-sizing: border-box;
      }

      html, body {
        margin: 0;
        padding: 0;
        font-family: ${theme.fontFamily};
        color: ${theme.colors.text.primary};
        background-color: ${theme.colors.background.default};
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
      }

      h1, h2, h3, h4, h5, h6, p {
        margin: 0;
      }
    `;

    // Cleanup function
    return () => {
      const element = document.getElementById("booking-platform-global-styles");
      if (element) {
        element.remove();
      }
    };
  }, [theme]);

  return null; // This component doesn't render anything visible
};

export default GlobalStyle;
