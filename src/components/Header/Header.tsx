import React, { useState, useEffect } from "react";
import { ScaleIn } from "../../animations";
import {
  HeaderContainer,
  NavContainer,
  Logo,
  MobileMenuButton,
  Nav,
  NavLink,
  ThemeToggle,
  ControlsContainer,
  MobileNavOverlay,
  CloseButton,
  NavLinkContainer,
} from "./Header.styled";

interface HeaderProps {
  toggleTheme: () => void;
  currentTheme: "light" | "dark";
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, currentTheme }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen && !isClosing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, isClosing]);

  const closeMenu = () => {
    setIsClosing(true);
    // Wait for animation to complete before actually closing
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 500); // Match this to the animation duration
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <div className="container">
        <NavContainer>
          <ScaleIn>
            <Logo href="#home">
              Alina<span>Kurant</span>
            </Logo>
          </ScaleIn>

          <Nav isOpen={isOpen}>
            <NavLink href="#home" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
            <NavLink href="#about" onClick={() => setIsOpen(false)}>
              About
            </NavLink>
            <NavLink href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </Nav>

          <ControlsContainer>
            <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
              ☰
            </MobileMenuButton>
            <ThemeToggle onClick={toggleTheme} currentTheme={currentTheme}>
              <div className="icon-container">
                <div className="light-icon">☀️</div>
                <div className="dark-icon">🌙</div>
              </div>
            </ThemeToggle>
          </ControlsContainer>
        </NavContainer>
      </div>

      {(isOpen || isClosing) && (
        <MobileNavOverlay isOpen={isOpen} isClosing={isClosing}>
          <CloseButton onClick={closeMenu} isClosing={isClosing}>
            ✕
          </CloseButton>
          <div className="mobile-nav-content">
            <NavLinkContainer delay={0.1} isClosing={isClosing} exitDelay={0.3}>
              <NavLink href="#home" onClick={closeMenu}>
                Home
              </NavLink>
            </NavLinkContainer>
            <NavLinkContainer delay={0.2} isClosing={isClosing} exitDelay={0.2}>
              <NavLink href="#projects" onClick={closeMenu}>
                Projects
              </NavLink>
            </NavLinkContainer>
            <NavLinkContainer delay={0.3} isClosing={isClosing} exitDelay={0.1}>
              <NavLink href="#about" onClick={closeMenu}>
                About
              </NavLink>
            </NavLinkContainer>
            <NavLinkContainer delay={0.4} isClosing={isClosing} exitDelay={0}>
              <NavLink href="#contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </NavLinkContainer>
          </div>
        </MobileNavOverlay>
      )}
    </HeaderContainer>
  );
};

export default Header;
