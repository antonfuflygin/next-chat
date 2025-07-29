'use client';

import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';
import { IDrawerProps } from './types';

const Overlay = styled.div<{ $isopen: boolean }>`
  position: absolute;
  inset: 0;
  opacity: ${({ $isopen }) => ($isopen ? 1 : 0)};
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
`;

const DrawerContainer = styled.div<{ $isopen: boolean; $side: 'left' | 'right' }>`
  position: fixed;
  top: 57px;
  ${({ $side }) => ($side === 'left' ? 'left: 0;' : 'right: 0;')}
  height: 100%;
  width: 280px;
  border-top-left-radius: 16px;
  background-color: white;
  box-shadow: ${({ $side }) => ($side === 'left' ? '2px 0 10px rgba(0, 0, 0, 0.2)' : '-2px 0 10px rgba(0, 0, 0, 0.2)')};
  z-index: 999;
  padding: 16px 24px;
  transform: ${({ $isopen, $side }) =>
    $isopen ? 'translateX(0)' : $side === 'left' ? 'translateX(-100%)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const Drawer: FC<IDrawerProps> = ({ isOpen, onClose, children, side = 'right' }) => {
  return (
    <>
      <Overlay $isopen={isOpen} />
      <DrawerContainer $isopen={isOpen} $side={side}>
        <CloseButton onClick={onClose}>
          <Image src="/close.svg" alt="Close" width={24} height={24} />
        </CloseButton>
        {children}
      </DrawerContainer>
    </>
  );
};

export default Drawer;
