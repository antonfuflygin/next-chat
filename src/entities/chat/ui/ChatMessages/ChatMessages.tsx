'use client';

import styled from 'styled-components';
import { useChat } from '../../api';
import { MessageBubble, MessageContainer } from '../MessageBubble/MessageBubble.styles';

const ChatContent = styled.main`
  width: 70%;
`;

interface IChatMessagesProps {
  chatId: string;
  children?: React.ReactNode;
}

const ChatMessages = ({ chatId, children }: IChatMessagesProps) => {
  const { data } = useChat(chatId);

  return (
    <ChatContent>
      <MessageContainer>
        {data?.messages.map((message) => (
          <MessageBubble key={message.messageId} $senderId={message.senderId}>
            {message.text}
          </MessageBubble>
        ))}
      </MessageContainer>
      {children}
    </ChatContent>
  );
};

export default ChatMessages;
