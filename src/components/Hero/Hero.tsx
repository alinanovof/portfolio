import React from "react";
import { SlideInLeft } from "../../animations";
import Button from "../Button/Button";
import {
  HeroSection,
  Content,
  HeroText,
  SubTitle,
  Title,
  Description,
  HeroImage,
} from "./Hero.styled";

const Hero: React.FC = () => {
  return (
    <HeroSection id="home">
      <div className="container">
        <Content>
          <HeroText>
            <SlideInLeft>
              <SubTitle>Frontend Developer</SubTitle>
              <Title>
                Alina <span className="highlight">Kurant</span>
              </Title>
              <Description>
                Building modern web experiences with React and TypeScript. I
                transform complex requirements into clean, intuitive interfaces
                that users love.
              </Description>
              <Button primary href="#projects">
                View Projects
              </Button>
              <Button href="#contact">Contact Me</Button>
            </SlideInLeft>
          </HeroText>

          <HeroImage>
            <img src="/images/avatar.jpg" alt="Developer" />
          </HeroImage>
        </Content>
      </div>
    </HeroSection>
  );
};

export default Hero;
