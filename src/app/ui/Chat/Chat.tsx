'use client';

import styled from 'styled-components';
import Input from '../components/Input';
import { IChatProps } from './types';

const ChatContent = styled.main`
  width: 70%;
`;

const Chat = ({ children }: IChatProps) => {
  return (
    <ChatContent>
      {children}
      <Input />
    </ChatContent>
  );
};

export default Chat;
