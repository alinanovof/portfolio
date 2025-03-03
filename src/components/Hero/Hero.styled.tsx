import styled from "styled-components";

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -10%;
    right: -10%;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
    opacity: 0.05;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -10%;
    left: -10%;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: ${({ theme }) => theme.secondary};
    opacity: 0.05;
    z-index: -1;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const HeroText = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  line-height: 1.2;

  .highlight {
    color: ${({ theme }) => theme.primary};
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.secondaryText};
  margin-bottom: 2rem;
  max-width: 500px;

  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const HeroImage = styled.div`
  @media (max-width: 992px) {
    order: 1;
  }

  img {
    margin: 0 auto;
    display: block;
    border-radius: 50%;
    max-width: 480px;
    box-shadow: 0 10px 30px ${({ theme }) => theme.shadow};
    transition: transform ${({ theme }) => theme.transition};

    &:hover {
      transform: translateY(-5px);
    }
  }
`;
