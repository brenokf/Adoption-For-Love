import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { getTheme } from '../src/utils/getTheme';

addDecorator(getStory => (
  <ThemeProvider theme={getTheme()}>  
    {getStory()}
  </ThemeProvider>
  )
);
