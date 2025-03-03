import styled from "styled-components";
import { ThemeType } from "../../themes";

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

export const ContactSection = styled.section`
  background-color: ${({ theme }) => theme.secondaryBackground};
`;

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ContactInfo = styled.div``;

export const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  .icon {
    font-size: 1.75rem;
    margin-right: 1rem;
    color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text {
    a {
      color: ${({ theme }) => theme.text};
      text-decoration: none;
      font-size: 1.1rem;
      font-weight: 500;
      transition: all 0.2s ease;
      display: inline-block;

      &:hover {
        color: ${({ theme }) => theme.primary};
        transform: translateX(3px);
      }
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

export const Form = styled.form`
  background-color: ${({ theme }) => theme.background};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px ${({ theme }) => theme.shadow};

  @media (min-width: 962px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5rem;

    & > div:first-child {
      grid-column: 1 / -1;
    }

    & > div:last-of-type {
      grid-column: 1 / -1;
    }

    & > button {
      grid-column: 1 / -1;
    }
  }
`;

export const FormGroup = styled.div<{ fullWidth?: boolean }>`
  margin-bottom: 1.5rem;

  @media (min-width: 962px) {
    margin-bottom: 0;
    grid-column: ${(props) => (props.fullWidth ? "1 / -1" : "auto")};
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: border-color ${({ theme }) => theme.transition};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  resize: vertical;
  min-height: 90px;
  transition: border-color ${({ theme }) => theme.transition};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

interface SubmitButtonProps {
  disabled?: boolean;
  theme: ThemeType;
}

export const SubmitButton = styled.button<SubmitButtonProps>`
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ disabled }) => !disabled && "#4A59C2"};
    transform: ${({ disabled }) => !disabled && "translateY(-3px)"};
    box-shadow: ${({ theme, disabled }) =>
      !disabled && `0 4px 8px ${theme.shadow}`};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const SuccessMessage = styled.div`
  background-color: ${({ theme }) => theme.success + "20"};
  color: ${({ theme }) => theme.success};
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  animation: fadeIn 0.3s ease-in;
`;

export const RecaptchaContainer = styled.div`
  margin-bottom: 1.5rem;
`;

export const RequiredIndicator = styled.span`
  color: ${({ theme }) => theme.error || "#ff0000"};
  margin-left: 4px;
`;
