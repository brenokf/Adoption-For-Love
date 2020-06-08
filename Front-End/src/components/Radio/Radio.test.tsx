import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Radio from '.';

describe('<Radio />', () => {
  afterEach(() => {
    cleanup;
    jest.clearAllMocks();
  });
  
  it('should mount', () => {
    const { getByTestId } = render(<Radio />);
    const RadioMock = getByTestId('Radio');

    expect(RadioMock).toBeInTheDocument();
  });
});