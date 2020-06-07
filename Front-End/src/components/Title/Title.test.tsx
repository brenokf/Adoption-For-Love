import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Title from '.';

describe('<Title />', () => {
  afterEach(() => {
    cleanup;
    jest.clearAllMocks();
  });
  
  it('should mount', () => {
    const { getByTestId } = render(<Title />);
    const TitleMock = getByTestId('Title');

    expect(TitleMock).toBeInTheDocument();
  });
});