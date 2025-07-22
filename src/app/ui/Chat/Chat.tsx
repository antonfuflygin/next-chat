'use client';

import styled from 'styled-components';
import { IChatProps } from './types';

const ChatContent = styled.main`
  width: 70%;
`;

export const Chat = ({ children }: IChatProps) => {
  return <ChatContent>{children}</ChatContent>;
};

export default Chat;
