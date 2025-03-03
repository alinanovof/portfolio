import { StyledButton } from "./Button.styled";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  primary?: boolean;
}

const Button = ({ children, href, primary }: ButtonProps) => {
  return (
    <StyledButton href={href} primary={primary}>
      {children}
    </StyledButton>
  );
};

export default Button;
