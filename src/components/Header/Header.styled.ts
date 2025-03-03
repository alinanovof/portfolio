import styled from "styled-components";
import { ThemeType } from "../../themes";

interface HeaderContainerProps {
  scrolled: boolean;
  theme: ThemeType;
}

interface ThemeToggleProps {
  currentTheme: "light" | "dark";
  theme: ThemeType;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  padding: 1.5rem 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: ${({ theme, scrolled }) =>
    scrolled ? theme.background : "transparent"};
  box-shadow: ${({ theme, scrolled }) =>
    scrolled ? `0 2px 10px ${theme.shadow}` : "none"};
  transition: background-color ${({ theme }) => theme.transition},
    box-shadow ${({ theme }) => theme.transition};
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};

  span {
    color: ${({ theme }) => theme.primary};
  }
`;

interface NavProps {
  isOpen: boolean;
  theme: ThemeType;
}

export const Nav = styled.nav<NavProps>`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.background};
    padding: 1rem;
    box-shadow: 0 4px 6px ${({ theme }) => theme.shadow};
    text-align: center;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.primary};
    transition: width ${({ theme }) => theme.transition};
  }

  &:hover:after {
    width: 100%;
  }
`;

export const ThemeToggle = styled.div<ThemeToggleProps>`
  position: relative;
  width: 60px;
  height: 30px;
  background: ${({ theme }) => theme.primary};
  border-radius: 30px;
  padding: 3px;
  cursor: pointer;
  box-shadow: 0 2px 5px ${({ theme }) => theme.shadow};
  transition: all ${({ theme }) => theme.transition};
  display: flex;
  align-items: center;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px ${({ theme }) => theme.shadow};
  }

  &:before {
    content: "";
    position: absolute;
    left: ${({ currentTheme }) =>
      currentTheme === "light" ? "3px" : "calc(100% - 27px)"};
    width: 24px;
    height: 24px;
    background-color: #ffffff;
    border-radius: 50%;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 2;
  }

  .icon-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
    box-sizing: border-box;
    z-index: 1;

    .light-icon,
    .dark-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: white;
      opacity: ${({ currentTheme }) =>
        currentTheme === "light" ? "0.5" : "1"};
      transition: opacity 0.3s ease;
    }

    .light-icon {
      opacity: ${({ currentTheme }) =>
        currentTheme === "light" ? "1" : "0.5"};
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
    margin-left: auto;
    margin-right: 1rem;
  }
`;
