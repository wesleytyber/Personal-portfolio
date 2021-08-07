import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../GlobalStyles/GlobalStyles';
import theme from '../GlobalStyles/theme';

export default function MyApp(props: any) {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}