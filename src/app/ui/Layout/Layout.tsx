'use client';
import styled, { ThemeProvider } from 'styled-components';
import Chat from '../Chat/Chat';
import Header from '../Header/Header';
import Sider from '../Sider/Sider';
import { ILayoutProps } from './types';
import { theme } from '@/app/lib/theme/theme';

const Content = styled.div`
  display: flex;
`;

const Container = styled.div`
  height: 100vh;
`;

const Layout = ({ children }: ILayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Content>
          <Sider />
          <Chat>{children}</Chat>
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
