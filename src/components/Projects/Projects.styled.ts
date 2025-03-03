// Projects.styled.tsx

import styled from "styled-components";
import { ThemeType } from "../../themes";

export const ProjectsSection = styled.section`
  background-color: ${({ theme }) => theme.secondaryBackground};
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.secondaryText};
    max-width: 600px;
    margin: 0 auto;
  }
`;

interface FilterButtonProps {
  active: boolean;
  theme: ThemeType;
}

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

export const FilterButton = styled.button<FilterButtonProps>`
  padding: 0.5rem 1rem;
  margin: 0 0.5rem 0.5rem;
  border-radius: 30px;
  background-color: ${({ theme, active }) =>
    active ? theme.primary : "transparent"};
  color: ${({ theme, active }) => (active ? "#fff" : theme.text)};
  border: 1px solid
    ${({ theme, active }) => (active ? theme.primary : theme.border)};
  font-weight: 500;
  transition: all ${({ theme }) => theme.transition};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, active }) =>
      active ? theme.primary : theme.secondaryBackground};
    transform: translateY(-2px);
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

export const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px ${({ theme }) => theme.shadow};
  transition: transform ${({ theme }) => theme.transition},
    box-shadow ${({ theme }) => theme.transition};
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px ${({ theme }) => theme.shadow};
  }
`;

export const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

export const ProjectContent = styled.div`
  padding: 1.5rem;
`;

export const ProjectTitle = styled.h4`
  margin-bottom: 0.5rem;
`;

export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Tag = styled.span`
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.secondaryBackground};
  color: ${({ theme }) => theme.secondaryText};
`;

export const CompanyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const CompanyName = styled.a`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProjectDate = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.secondaryText};
`;

export const DetailsButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.primary};
  font-size: 0.9rem;
  padding: 0;
  margin-top: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  &:after {
    content: "→";
    margin-left: 0.25rem;
    transition: transform 0.2s ease;
  }

  &:hover:after {
    transform: translateX(3px);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: 8px;
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: fadeInUp 0.3s ease;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.secondaryText};

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

export const ModalContent = styled.div`
  padding: 2rem;

  h3 {
    margin-bottom: 0.5rem;
  }

  h4 {
    color: ${({ theme }) => theme.primary};
    margin-bottom: 1.5rem;
    font-weight: 500;
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }

  h5 {
    margin-bottom: 0.75rem;
  }
`;

export const CompanyLink = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;
