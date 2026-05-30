'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { IDrawerProps } from './types';

const Drawer: FC<IDrawerProps> = ({ isOpen, onClose, children, side = 'right' }) => {
  const drawerClassName = classNames(
    'fixed top-14 bottom-0 z-50 w-72 bg-white px-6 py-4 shadow-lg transition-transform duration-300',
    side === 'left' ? 'left-0 rounded-tr-2xl' : 'right-0 rounded-tl-2xl',
    isOpen ? 'translate-x-0' : side === 'left' ? '-translate-x-full' : 'translate-x-full'
  );

  return (
    <>
      <div
        className={classNames(
          'pointer-events-none absolute inset-0 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0'
        )}
      />
      <div className={drawerClassName}>
        <button className="absolute right-4 top-4 cursor-pointer bg-transparent" type="button" onClick={onClose}>
          <Image src="/close.svg" alt="Close" width={24} height={24} />
        </button>
        {children}
      </div>
    </>
  );
};

export default Drawer;
