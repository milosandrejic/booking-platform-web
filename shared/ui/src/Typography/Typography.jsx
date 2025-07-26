import React from "react";
import styled from "styled-components";

const StyledTypography = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme, color }) => {
    if (color && theme.colors.text[color]) {
      return theme.colors.text[color];
    }
    return theme.colors.text.primary;
  }};
  margin: 0;
  
  ${({ variant, theme }) => {
    const typography = theme.typography;
    switch (variant) {
      case "h1":
        return `
          font-size: ${typography.fontSizes["4xl"]};
          font-weight: ${typography.fontWeights.bold};
          line-height: ${typography.lineHeights.tight};
          margin-bottom: ${theme.spacing.lg};
        `;
      case "h2":
        return `
          font-size: ${typography.fontSizes["3xl"]};
          font-weight: ${typography.fontWeights.bold};
          line-height: ${typography.lineHeights.tight};
          margin-bottom: ${theme.spacing.md};
        `;
      case "h3":
        return `
          font-size: ${typography.fontSizes["2xl"]};
          font-weight: ${typography.fontWeights.semibold};
          line-height: ${typography.lineHeights.tight};
          margin-bottom: ${theme.spacing.md};
        `;
      case "h4":
        return `
          font-size: ${typography.fontSizes.xl};
          font-weight: ${typography.fontWeights.semibold};
          line-height: ${typography.lineHeights.snug};
          margin-bottom: ${theme.spacing.sm};
        `;
      case "h5":
        return `
          font-size: ${typography.fontSizes.lg};
          font-weight: ${typography.fontWeights.medium};
          line-height: ${typography.lineHeights.snug};
          margin-bottom: ${theme.spacing.sm};
        `;
      case "h6":
        return `
          font-size: ${typography.fontSizes.md};
          font-weight: ${typography.fontWeights.medium};
          line-height: ${typography.lineHeights.normal};
          margin-bottom: ${theme.spacing.sm};
        `;
      case "body1":
        return `
          font-size: ${typography.fontSizes.md};
          font-weight: ${typography.fontWeights.normal};
          line-height: ${typography.lineHeights.relaxed};
          margin-bottom: ${theme.spacing.sm};
        `;
      case "body2":
        return `
          font-size: ${typography.fontSizes.sm};
          font-weight: ${typography.fontWeights.normal};
          line-height: ${typography.lineHeights.normal};
          margin-bottom: ${theme.spacing.xs};
        `;
      case "caption":
        return `
          font-size: ${typography.fontSizes.xs};
          font-weight: ${typography.fontWeights.normal};
          line-height: ${typography.lineHeights.normal};
        `;
      case "overline":
        return `
          font-size: ${typography.fontSizes.xs};
          font-weight: ${typography.fontWeights.medium};
          line-height: ${typography.lineHeights.normal};
          text-transform: uppercase;
          letter-spacing: 0.5px;
        `;
      default:
        return `
          font-size: ${typography.fontSizes.md};
          font-weight: ${typography.fontWeights.normal};
          line-height: ${typography.lineHeights.normal};
        `;
    }
  }}
`;

const Typography = ({ 
  children, 
  variant = "body1", 
  color = "primary",
  component,
  className,
  ...props 
}) => {
  const Component = component || getDefaultComponent(variant);
  
  return (
    <StyledTypography
      as={Component}
      variant={variant}
      color={color}
      className={className}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

const getDefaultComponent = (variant) => {
  switch (variant) {
    case "h1": return "h1";
    case "h2": return "h2";
    case "h3": return "h3";
    case "h4": return "h4";
    case "h5": return "h5";
    case "h6": return "h6";
    case "body1": return "p";
    case "body2": return "p";
    case "caption": return "span";
    case "overline": return "span";
    default: return "p";
  }
};

export default Typography;
