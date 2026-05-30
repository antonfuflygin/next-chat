import Link, { LinkProps } from 'next/link';
import type { PropsWithChildren } from 'react';

const CustomLink = ({ children, ...props }: PropsWithChildren<LinkProps>) => {
  return (
    <Link {...props} className="text-slate-300 no-underline">
      {children}
    </Link>
  );
};

export default CustomLink;
