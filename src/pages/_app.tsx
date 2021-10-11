import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../GlobalStyles/GlobalStyles";
import theme from "../GlobalStyles/theme";
import NextNProgress from "nextjs-progressbar";

export default function MyApp(props: any) {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <GlobalStyle />
      <NextNProgress
        color={theme.colors.gradient}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
