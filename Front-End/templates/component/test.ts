import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TemplateName from '.';

describe('<TemplateName />', () => {
  afterEach(() => {
    cleanup;
    jest.clearAllMocks();
  });
  
  it('should mount', () => {
    const { getByTestId } = render(<TemplateName />);
    const TemplateNameMock = getByTestId('TemplateName');

    expect(TemplateNameMock).toBeInTheDocument();
  });
});