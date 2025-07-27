'use client';

import styled from 'styled-components';
import ChatListItem from './ui/ChatListItem/ChatListItem';
import SearchInput from './ui/SearchInput/SearchInput';
import { useChats } from '@/lib/api/сhats/useChats';

const SiderContent = styled.div`
  width: 30%;
  border-right: ${({ theme }) => `1px solid ${theme.colors.border.primary}`};
  overflow: auto;
  padding: 12px;
`;

export const Sider = () => {
  const { data } = useChats();

  return (
    <SiderContent>
      <SearchInput />
      {data?.map((chat) => (
        <ChatListItem chat={chat} key={chat.id} />
      ))}
    </SiderContent>
  );
};

export default Sider;
