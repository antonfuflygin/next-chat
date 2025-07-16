'use client';
import Link from 'next/link';
import styled from 'styled-components';

const Menu = styled.nav`
  display: flex;
  justify-content: space-around;
`;

const Header = () => {
  return (
    <Menu>
      <Link href="">main</Link>
      <Link href="">other</Link>
    </Menu>
  );
};

export default Header;
