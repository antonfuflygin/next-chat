interface IAvatarProps extends IAvatarWrapperProps {
  src: string;
}

export interface IAvatarWrapperProps {
  width?: number;
  height?: number;
}

export type TAvatarProps = Partial<IAvatarProps>;
