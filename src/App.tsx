import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Store from './store';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { defaultTheme } from './styles/theme';

function App() {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
