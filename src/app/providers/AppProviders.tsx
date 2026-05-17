'use client';

import { PropsWithChildren } from 'react';
import CustomQueryClientProvider from './CustomQueryProvider';
import CustomThemeProvider from './CustomThemeProvider';

const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <CustomQueryClientProvider>
      <CustomThemeProvider>{children}</CustomThemeProvider>
    </CustomQueryClientProvider>
  );
};

export default AppProviders;
