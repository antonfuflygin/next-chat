'use client';
import styled from 'styled-components';
import Chat from '../../Chat';
import Header from '@/app/ui/Header/Header';
import Sider from '@/app/ui/Sider/Sider';

const Content = styled.div`
  display: flex;
`;

const Container = styled.div`
  height: 100vh;
`;

const ChatLayout = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Sider />
        <Chat />
      </Content>
    </Container>
  );
};

export default ChatLayout;
