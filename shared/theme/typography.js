// Typography scale and font definitions
export const fontFamily = "Roboto, sans-serif";

export const fontWeights = {
  thin: 100,
  extralight: 200, 
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
};

export const fontSizes = {
  xs: "0.75rem",    // 12px
  sm: "0.875rem",   // 14px
  base: "1rem",     // 16px
  lg: "1.125rem",   // 18px
  xl: "1.25rem",    // 20px
  "2xl": "1.5rem",  // 24px
  "3xl": "1.875rem", // 30px
  "4xl": "2.25rem", // 36px
  "5xl": "3rem",    // 48px
  "6xl": "3.75rem", // 60px
  "7xl": "4.5rem"   // 72px
};

export const lineHeights = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2
};

// Typography variants for consistent text styling
export const typography = {
  h1: {
    fontFamily,
    fontSize: fontSizes["5xl"],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
    letterSpacing: "-0.025em"
  },
  h2: {
    fontFamily,
    fontSize: fontSizes["4xl"],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
    letterSpacing: "-0.025em"
  },
  h3: {
    fontFamily,
    fontSize: fontSizes["3xl"],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.snug
  },
  h4: {
    fontFamily,
    fontSize: fontSizes["2xl"],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.snug
  },
  h5: {
    fontFamily,
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.normal
  },
  h6: {
    fontFamily,
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.normal
  },
  body1: {
    fontFamily,
    fontSize: fontSizes.base,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal
  },
  body2: {
    fontFamily,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal
  },
  subtitle1: {
    fontFamily,
    fontSize: fontSizes.base,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.normal
  },
  subtitle2: {
    fontFamily,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.normal
  },
  caption: {
    fontFamily,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal
  },
  overline: {
    fontFamily,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.normal,
    textTransform: "uppercase",
    letterSpacing: "0.1em"
  },
  button: {
    fontFamily,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.none,
    textTransform: "none"
  }
};
