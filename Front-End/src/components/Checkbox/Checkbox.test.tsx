import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Checkbox from '.';

describe('<Checkbox />', () => {
  afterEach(() => {
    cleanup;
    jest.clearAllMocks();
  });
  
  it('should mount', () => {
    const { getByTestId } = render(<Checkbox />);
    const CheckboxMock = getByTestId('Checkbox');

    expect(CheckboxMock).toBeInTheDocument();
  });
});