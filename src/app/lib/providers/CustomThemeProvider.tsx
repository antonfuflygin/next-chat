'use client';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';

const CustomThemeProvider = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
