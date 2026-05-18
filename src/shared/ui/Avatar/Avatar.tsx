import Image from 'next/image';
import styled from 'styled-components';
import { IAvatarWrapperProps, TAvatarProps } from './types';

const AvatarWrapper = styled.div<IAvatarWrapperProps>`
  display: grid;
  min-width: 40px;
  width: ${(props) => props.width}px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: #0211251f;
  padding-bottom: 4px;
`;

const AutoAvatar = styled.div`
  margin: auto;
  color: #fff;
  font-size: 24px;
`;

const Avatar = ({ src, width, height }: TAvatarProps) => {
  return (
    <AvatarWrapper width={width} height={height}>
      {src ? (
        <Image src={src} width={width || 20} height={height || 20} alt="avatar" />
      ) : (
        <AutoAvatar>
          <Image src="account.svg" width={width || 20} height={height || 20} alt="avatar" />
        </AutoAvatar>
      )}
    </AvatarWrapper>
  );
};

export default Avatar;
