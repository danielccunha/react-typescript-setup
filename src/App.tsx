import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import GlobalStyle from './styles/global';
import { defaultTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
