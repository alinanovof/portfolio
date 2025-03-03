import styled from "styled-components";
import { ThemeType } from "../../themes";

interface ButtonProps {
  primary?: boolean;
  theme: ThemeType;
}

export const StyledButton = styled.a<ButtonProps>`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme, primary }) =>
    primary ? theme.primary : "transparent"};
  color: ${({ theme, primary }) => (primary ? "#fff" : theme.text)};
  border: 2px solid
    ${({ theme, primary }) => (primary ? theme.primary : theme.border)};
  border-radius: 4px;
  font-weight: 500;
  margin-right: 1rem;
  transition: all ${({ theme }) => theme.transition};
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px ${({ theme }) => theme.shadow};
    background-color: ${({ theme, primary }) =>
      primary ? theme.primaryHover : theme.secondaryBackground};
  }

  @media (max-width: 576px) {
    display: block;
    margin: 1rem 0;
  }
`;
