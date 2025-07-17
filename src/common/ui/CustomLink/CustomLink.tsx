import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const LinkWrapper = styled.div`
  a {
    text-decoration: none;
    color: #000;
  }
`;

const CustomLink = ({ children }: PropsWithChildren & LinkProps) => {
  return (
    <LinkWrapper>
      <Link href="">{children}</Link>
    </LinkWrapper>
  );
};

export default CustomLink;
