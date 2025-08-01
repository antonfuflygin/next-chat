'use client';

import styled from 'styled-components';
import MessangeInput from '../components/MessangeInput';
import { MessageBubble, MessageContainer } from './ui/Message/Message.styles';
import { useChat } from '@/lib/api/chat/useChats';

const ChatContent = styled.main`
  width: 70%;
`;

const Chat = () => {
  const { data } = useChat('1');

  return (
    <ChatContent>
      <MessageContainer>
        {data?.messages.map((message) => (
          <MessageBubble key={message.messageId} $senderId={message.senderId}>
            {message.text}
          </MessageBubble>
        ))}
      </MessageContainer>
      <MessangeInput />
    </ChatContent>
  );
};

export default Chat;
