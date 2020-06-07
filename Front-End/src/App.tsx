import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeType } from './types';
import Routes from './routes';

type AppProps = {
  theme: ThemeType;
};

const App = ({ theme }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

export default App;
