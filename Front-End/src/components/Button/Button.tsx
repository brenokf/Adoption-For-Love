import React, { ReactNode } from 'react';
import { StyledButton } from './Button.style';

type ButtonProps = {
  children: ReactNode;
  variant?: string;
  type?: string; 
  onClick: () => void;
};

const Button = ({children, variant='default', type='button', onClick}: ButtonProps) => (
  <StyledButton type={type} className={variant} onClick={onClick} data-testid="Button">
    {children}
  </StyledButton>
);

export default Button;
