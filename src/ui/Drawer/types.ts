import { ReactNode } from 'react';

export interface IDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  side?: 'left' | 'right';
}
