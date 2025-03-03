import {
  FooterContainer,
  FooterContent,
  Copyright,
  FooterLinks,
  FooterLink,
} from "./Footer.styled";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <Copyright>
            &copy; {currentYear} Alina Kurant. All rights reserved.
          </Copyright>

          <FooterLinks>
            <FooterLink href="#home">Home</FooterLink>
            <FooterLink href="#projects">Projects</FooterLink>
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </FooterLinks>
        </FooterContent>
      </div>
    </FooterContainer>
  );
};

export default Footer;
