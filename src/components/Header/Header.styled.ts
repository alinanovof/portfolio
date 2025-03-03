import styled, { keyframes } from "styled-components";
import { ThemeType } from "../../themes";

interface HeaderContainerProps {
  scrolled: boolean;
  theme: ThemeType;
}

interface ThemeToggleProps {
  currentTheme: "light" | "dark";
  theme: ThemeType;
}

interface MobileNavOverlayProps {
  isOpen: boolean;
  isClosing?: boolean;
  theme: ThemeType;
}

interface NavLinkContainerProps {
  delay: number;
  exitDelay: number;
  isClosing?: boolean;
  theme: ThemeType;
}

interface CloseButtonProps {
  isClosing?: boolean;
  theme: ThemeType;
}

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUpOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const slideDownOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

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
  margin: auto;

  @media (max-width: 768px) {
    display: none; /* We'll use the overlay for mobile */
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  position: relative;
  text-decoration: none;

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

  @media (max-width: 768px) {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0.75rem 0;

    &:after {
      height: 3px;
    }
  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 1rem;
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

  @media (max-width: 768px) {
    width: 45px;
    height: 24px;

    &:before {
      width: 18px;
      height: 18px;
      left: ${({ currentTheme }) =>
        currentTheme === "light" ? "3px" : "calc(100% - 21px)"};
    }

    .icon-container {
      padding: 0 6px;

      .light-icon,
      .dark-icon {
        font-size: 10px;
      }
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
`;

export const MobileNavOverlay = styled.div<MobileNavOverlayProps>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) =>
      `${theme.background}f9`}; /* Slightly transparent */
    backdrop-filter: blur(8px);
    z-index: 100;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.4s
      ease-in-out forwards;
    overflow: hidden;

    .mobile-nav-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 2rem;
      animation: ${({ isClosing }) => (isClosing ? slideDownOut : slideDown)}
        0.4s ease-in-out forwards;
    }
  }
`;

export const CloseButton = styled.button<CloseButtonProps>`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 2rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 0.5rem;
  z-index: 102;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.3s
    ease-in-out forwards;

  &:hover {
    background-color: ${({ theme }) => `${theme.shadow}33`};
    transform: rotate(90deg);
  }
`;

export const NavLinkContainer = styled.div<NavLinkContainerProps>`
  opacity: ${({ isClosing }) => (isClosing ? 1 : 0)};
  animation: ${({ isClosing }) => (isClosing ? slideUpOut : slideUp)} 0.5s
    ease-in-out forwards;
  animation-delay: ${({ isClosing, delay, exitDelay }) =>
    isClosing ? `${exitDelay}s` : `${delay}s`};
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  width: 100%;
  max-width: 250px;
  text-align: center;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => `${theme.shadow}22`};
  }
`;
