import React from "react";
import { FadeIn } from "../../animations";
import {
  AboutSection,
  AboutContent,
  AboutImage,
  AboutText,
  SkillsContainer,
  Skill,
} from "./About.styled";

interface Skill {
  name: string;
  icon: string;
}

const About: React.FC = () => {
  const skills: Skill[] = [
    { name: "JavaScript", icon: "📜" },
    { name: "React", icon: "⚛️" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "Node.js", icon: "🟢" },
    { name: "TypeScript", icon: "📘" },
    { name: "Redux", icon: "🔄" },
    { name: "Responsive Design", icon: "📱" },
    { name: "Git", icon: "📂" },
    { name: "Jest", icon: "✅" },
    { name: "Enzyme", icon: "🧪" },
    { name: "REST APIs", icon: "🔗" },
    { name: "MongoDB", icon: "🍃" },
    { name: "SQL", icon: "💾" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "CI/CD", icon: "🔄" },
    { name: "Agile", icon: "🏃‍♂️" },
  ];

  return (
    <AboutSection id="about">
      <div className="container">
        <AboutContent>
          <AboutImage>
            <img src="/images/about.png" alt="About me" />
          </AboutImage>

          <AboutText>
            <FadeIn>
              <h2>About Me</h2>
              <p>
                With 4 years of professional experience, I've contributed to
                projects at Mprest, Karma, and Enroute, developing everything
                from 3D mapping interfaces to e-commerce platforms.
              </p>

              <h4>My Skills</h4>
              <SkillsContainer>
                {skills.map((skill, index) => (
                  <Skill key={index}>
                    <span>{skill.icon}</span>
                    {skill.name}
                  </Skill>
                ))}
              </SkillsContainer>
            </FadeIn>
          </AboutText>
        </AboutContent>
      </div>
    </AboutSection>
  );
};

export default About;
