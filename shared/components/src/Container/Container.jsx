import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => {
    switch (maxWidth) {
      case "sm": return "576px";
      case "md": return "768px";
      case "lg": return "992px";
      case "xl": return "1200px";
      case "xxl": return "1400px";
      default: return "1200px";
    }
  }};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const Container = ({ children, maxWidth = "xl", className, ...props }) => {
  return (
    <StyledContainer maxWidth={maxWidth} className={className} {...props}>
      {children}
    </StyledContainer>
  );
};

export default Container;
