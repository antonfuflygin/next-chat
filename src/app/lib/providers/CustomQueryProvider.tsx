'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { setDefaultOptions } from 'date-fns';
import { ru } from 'date-fns/locale';
import { PropsWithChildren } from 'react';

const queryClient = new QueryClient();

setDefaultOptions({ locale: ru });

const CustomQueryClientProvider = ({ children }: PropsWithChildren) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default CustomQueryClientProvider;
