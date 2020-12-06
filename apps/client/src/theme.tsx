import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, Theme, ThemeProvider } from '@material-ui/core/styles';
import { green, grey, red } from '@material-ui/core/colors';

export const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      light: green[600],
      main: green[800],
      dark: green[900],
    },
    secondary: {
      light: grey[600],
      main: grey[800],
      dark: grey[900],
    },
    error: {
      light: red[600],
      main: red[800],
      dark: red[900],
    },
    type: 'dark',
  },
  typography: {
    fontSize: 14,
    fontFamily: ['Open Sans Condensed', 'sans-serif'].join(','),
  },
});

export const AppThemeProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
