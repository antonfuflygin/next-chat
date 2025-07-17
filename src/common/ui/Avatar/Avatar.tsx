import Image from 'next/image';
import styled from 'styled-components';
import { IAvatarWrapperProps, TAvatarProps } from './types';

const AvatarWrapper = styled.div<IAvatarWrapperProps>`
  display: grid;
  min-width: 40px;
  width: ${(props) => props.width};
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
      {src ? <Image src={src} width={width || 40} height={height || 40} alt="avatar" /> : <AutoAvatar>A</AutoAvatar>}
    </AvatarWrapper>
  );
};

export default Avatar;
