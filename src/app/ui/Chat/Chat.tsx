'use client';

import styled from 'styled-components';
import MessangeInput from '../components/MessangeInput';
import { IChatProps } from './types';

const ChatContent = styled.main`
  width: 70%;
`;

const Chat = ({ children }: IChatProps) => {
  return (
    <ChatContent>
      {children}
      <MessangeInput />
    </ChatContent>
  );
};

export default Chat;
