import styled from 'styled-components';

export const StyledButton = styled.button<any>`
  background: ${({ theme }) => theme.palette.primary};
  border: 1px solid transparent;
  cursor: pointer;
  outline: none;
  transition: ${({ theme }) => theme.animation.transition};
`;
