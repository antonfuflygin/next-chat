export interface IMenuProps {
  items: IMenuItem[];
}

export interface IMenuItem {
  id: string;
  title: string;
  patch: string;
}

export interface IDrawerProps {
  onToggleDrawer: () => void;
  children?: React.ReactNode;
}
