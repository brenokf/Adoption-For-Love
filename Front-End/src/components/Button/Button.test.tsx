import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '.';

describe('<Button />', () => {
  afterEach(() => {
    cleanup;
    jest.clearAllMocks();
  });
  
  it('should mount', () => {
    const { getByTestId } = render(<Button />);
    const ButtonMock = getByTestId('Button');

    expect(ButtonMock).toBeInTheDocument();
  });
});