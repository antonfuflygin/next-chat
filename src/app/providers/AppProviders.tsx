'use client';

import { PropsWithChildren } from 'react';
import CustomQueryClientProvider from './CustomQueryProvider';

const AppProviders = ({ children }: PropsWithChildren) => {
  return <CustomQueryClientProvider>{children}</CustomQueryClientProvider>;
};

export default AppProviders;
