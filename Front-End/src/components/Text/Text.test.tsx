import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Text from '.';

describe('<Text />', () => {
  afterEach(() => {
    cleanup;
    jest.clearAllMocks();
  });
  
  it('should mount', () => {
    const { getByTestId } = render(<Text />);
    const TextMock = getByTestId('Text');

    expect(TextMock).toBeInTheDocument();
  });
});