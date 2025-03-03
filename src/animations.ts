import styled, { keyframes } from "styled-components";

interface AnimationProps {
  delay?: string;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FadeIn = styled.div<AnimationProps>`
  opacity: 0;
  animation: ${fadeIn} 0.8s forwards;
  animation-delay: ${(props) => props.delay || "0s"};
`;

const scaleIn = keyframes`
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
`;

export const ScaleIn = styled.div<AnimationProps>`
  animation: ${scaleIn} 0.4s ease-out forwards;
  animation-delay: ${(props) => props.delay || "0s"};
`;

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const SlideInLeft = styled.div<AnimationProps>`
  opacity: 0;
  animation: ${slideInFromLeft} 0.6s ease-out forwards;
  animation-delay: ${(props) => props.delay || "0s"};
`;
