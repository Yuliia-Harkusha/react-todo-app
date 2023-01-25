import React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from './Theme';
import { Header } from './Header';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
};
