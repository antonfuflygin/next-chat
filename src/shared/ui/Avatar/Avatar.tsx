import Image from 'next/image';
import { TAvatarProps } from './types';

const Avatar = ({ src, width, height }: TAvatarProps) => {
  const avatarStyle = width || height ? { width, height } : undefined;

  return (
    <div
      className="grid size-10 min-w-10 place-items-center overflow-hidden rounded-full bg-slate-200"
      style={avatarStyle}
    >
      {src ? (
        <Image className="rounded-full" src={src} width={width || 20} height={height || 20} alt="avatar" />
      ) : (
        <div className="grid place-items-center">
          <Image src="account.svg" width={width || 20} height={height || 20} alt="avatar" />
        </div>
      )}
    </div>
  );
};

export default Avatar;
