import React, { ReactNode } from 'react';
import { StyledButton } from './styles'
type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  variant?: string;
  onClick: (e: any) => void;
};

const Button = ({ children, disabled, variant, onClick }: ButtonProps) => {
  return (
    <StyledButton className={variant} onClick={onClick} disabled={disabled}>{children}</StyledButton>
  );
}

export default Button;
