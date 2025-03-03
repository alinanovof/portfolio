import styled from "styled-components";

export const AboutSection = styled.section`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -50px;
    right: 0;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
    opacity: 0.05;
    z-index: -1;
  }
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const AboutImage = styled.div`
  img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 10px 30px ${({ theme }) => theme.shadow};
  }

  @media (max-width: 992px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

export const AboutText = styled.div``;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const Skill = styled.div`
  background-color: ${({ theme }) => theme.secondaryBackground};
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform ${({ theme }) => theme.transition};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px ${({ theme }) => theme.shadow};
  }
`;
