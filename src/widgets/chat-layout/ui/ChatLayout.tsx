'use client';

import styled from 'styled-components';
import { ChatMessages } from '@/entities/chat';
import { MessageInput } from '@/features/send-message';
import { AppHeader } from '@/widgets/app-header';
import { ChatSidebar } from '@/widgets/chat-sidebar';

const Content = styled.div`
  display: flex;
`;

const Container = styled.div`
  height: 100vh;
`;

const ChatLayout = () => {
  return (
    <Container>
      <AppHeader />
      <Content>
        <ChatSidebar />
        <ChatMessages chatId="1">
          <MessageInput />
        </ChatMessages>
      </Content>
    </Container>
  );
};

export default ChatLayout;
