import { PropsWithChildren } from 'react';

export interface IDrawerProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  side?: 'left' | 'right';
}
