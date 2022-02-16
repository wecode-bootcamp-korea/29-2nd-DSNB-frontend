import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import GlobalStyle from './styles/Global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
