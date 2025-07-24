import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('./shared/theme/fonts/Roboto-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Roboto';
    src: url('./shared/theme/fonts/Roboto-ExtraLight.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Roboto';
    src: url('./shared/theme/fonts/Roboto-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Roboto';
    src: url('./shared/theme/fonts/Roboto-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Roboto';
    src: url('./shared/theme/fonts/Roboto-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Roboto';
    src: url('./shared/theme/fonts/Roboto-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Roboto';
    src: url('./shared/theme/fonts/Roboto-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Roboto';
    src: url('./shared/theme/fonts/Roboto-ExtraBold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Roboto';
    src: url('./shared/theme/fonts/Roboto-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  /* Italic variants */
  @font-face {
    font-family: 'Roboto';
    src: url('./shared/theme/fonts/Roboto-Italic.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Roboto';
    src: url('./shared/theme/fonts/Roboto-LightItalic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Roboto';
    src: url('./shared/theme/fonts/Roboto-MediumItalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Roboto';
    src: url('./shared/theme/fonts/Roboto-BoldItalic.ttf') format('truetype');
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.background.default};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`;

export default GlobalStyle;
