'use client';
import Image from 'next/image';
import styled from 'styled-components';
import Avatar from '@/common/ui/Avatar/Avatar';
import CustomLink from '@/common/ui/CustomLink/CustomLink';

const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 24px;
  box-shadow: 0px 1px 2px 0px #0211251f;
  height: 56px;
`;

const Title = styled.h1`
  font-weight: 600;
  line-height: 32px;
  font-size: 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Header = () => {
  return (
    <Menu>
      <CustomLink href="">
        <TitleWrapper>
          <Image src="kinnect-logo.svg" width={32} height={32} alt="logo" />
          <Title>Kinnect</Title>
        </TitleWrapper>
      </CustomLink>

      <LinkGroup>
        <CustomLink href="">
          <Image src="settings.svg" width={24} height={24} alt="logo" />
        </CustomLink>
        <CustomLink href="">
          <Image src="extends.svg" width={15} height={15} alt="logo" />
        </CustomLink>
        <CustomLink href="">
          <Avatar src="" />
        </CustomLink>
      </LinkGroup>
    </Menu>
  );
};

export default Header;
