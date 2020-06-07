import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputText from '.';

describe('<InputText />', () => {
  afterEach(() => {
    cleanup;
    jest.clearAllMocks();
  });
  
  it('should mount', () => {
    const { getByTestId } = render(<InputText />);
    const InputTextMock = getByTestId('InputText');

    expect(InputTextMock).toBeInTheDocument();
  });
});