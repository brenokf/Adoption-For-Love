import React from 'react';
import { ThemeProvider } from '@creditas/stylitas';
import { getTheme } from './../templates/themes';

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={getTheme()}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator;
