import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Select from '.';

describe('<Select />', () => {
  afterEach(() => {
    cleanup;
    jest.clearAllMocks();
  });
  
  it('should mount', () => {
    const { getByTestId } = render(<Select />);
    const SelectMock = getByTestId('Select');

    expect(SelectMock).toBeInTheDocument();
  });
});