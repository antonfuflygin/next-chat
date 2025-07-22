'use client';

import styled from 'styled-components';
import Chat from '../Chat/Chat';
import Header from '../Header/Header';
import Sider from '../Sider/Sider';
import { ILayoutProps } from './types';

const Content = styled.div`
  display: flex;
  height: 120vh;
  padding-top: 56px;
`;

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header />
      <Content>
        <Sider />
        <Chat>{children}</Chat>
      </Content>
    </>
  );
};

export default Layout;
