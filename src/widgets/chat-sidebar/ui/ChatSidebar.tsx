'use client';

import styled from 'styled-components';
import { ChatListItem, useChats } from '@/entities/chat';
import { SearchInput } from '@/features/search-chats';

const SidebarContent = styled.aside`
  width: 30%;
  border-right: ${({ theme }) => `1px solid ${theme.colors.border.primary}`};
  overflow: auto;
  padding: 12px;
`;

const ChatSidebar = () => {
  const { data } = useChats();

  return (
    <SidebarContent>
      <SearchInput />
      {data?.map((chat) => (
        <ChatListItem chat={chat} key={chat.id} />
      ))}
    </SidebarContent>
  );
};

export default ChatSidebar;
