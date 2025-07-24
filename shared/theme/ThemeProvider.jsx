import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "./theme.js";
import GlobalStyle from "./GlobalStyle.jsx";

// Styled-components theme provider wrapper with global styles
export const ThemeProvider = ({ children, includeGlobalStyles = true }) => {
  return (
    <StyledThemeProvider theme={theme}>
      {includeGlobalStyles && <GlobalStyle />}
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
