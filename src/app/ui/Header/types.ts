import { PropsWithChildren } from 'react';

export interface IMenuProps {
  items: IMenuItem[];
}

export interface IMenuItem {
  id: string;
  title: string;
  patch: string;
}

export interface IDrawerProps extends PropsWithChildren {
  onToggleDrawer: () => void;
}
