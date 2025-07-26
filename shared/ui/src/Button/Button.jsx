import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  text-decoration: none;
  transition: all 0.2s ease;
  
  ${({ variant, theme }) => {
    const colors = theme.colors;
    switch (variant) {
      case "primary":
        return `
          background-color: ${colors.primary.main};
          color: ${colors.common.white};
          &:hover {
            background-color: ${colors.primary.dark};
          }
        `;
      case "secondary":
        return `
          background-color: ${colors.grey[100]};
          color: ${colors.text.primary};
          &:hover {
            background-color: ${colors.grey[200]};
          }
        `;
      case "outline":
        return `
          background-color: transparent;
          color: ${colors.primary.main};
          border: 1px solid ${colors.primary.main};
          &:hover {
            background-color: ${colors.primary.main};
            color: ${colors.common.white};
          }
        `;
      default:
        return `
          background-color: ${colors.primary.main};
          color: ${colors.common.white};
          &:hover {
            background-color: ${colors.primary.dark};
          }
        `;
    }
  }}
  
  ${({ size, theme }) => {
    const spacing = theme.spacing;
    switch (size) {
      case "small":
        return `
          padding: ${spacing.xs} ${spacing.sm};
          font-size: ${theme.typography.fontSizes.sm};
          min-height: 32px;
        `;
      case "large":
        return `
          padding: ${spacing.md} ${spacing.lg};
          font-size: ${theme.typography.fontSizes.lg};
          min-height: 48px;
        `;
      default:
        return `
          padding: ${spacing.sm} ${spacing.md};
          font-size: ${theme.typography.fontSizes.md};
          min-height: 40px;
        `;
    }
  }}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Button = ({ 
  children, 
  variant = "primary", 
  size = "medium", 
  disabled = false,
  onClick,
  type = "button",
  className,
  ...props 
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={className}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
