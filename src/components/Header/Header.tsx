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
} from "./Header.styled";

interface HeaderProps {
  toggleTheme: () => void;
  currentTheme: "light" | "dark";
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, currentTheme }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  return (
    <HeaderContainer scrolled={scrolled}>
      <div className="container">
        <NavContainer>
          <ScaleIn>
            <Logo href="#home">
              Alina<span>Kurant</span>
            </Logo>
          </ScaleIn>

          <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✕" : "☰"}
          </MobileMenuButton>

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

          <ThemeToggle onClick={toggleTheme} currentTheme={currentTheme}>
            <div className="icon-container">
              <div className="light-icon">☀️</div>
              <div className="dark-icon">🌙</div>
            </div>
          </ThemeToggle>
        </NavContainer>
      </div>
    </HeaderContainer>
  );
};

export default Header;
