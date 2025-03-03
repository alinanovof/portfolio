import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 3rem 0;
  background-color: ${({ theme }) => theme.background};
  border-top: 1px solid ${({ theme }) => theme.border};
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.secondaryText};
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.secondaryText};
  transition: color ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
