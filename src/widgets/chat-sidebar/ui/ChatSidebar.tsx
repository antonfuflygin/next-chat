'use client';

import { ChatListItem, useChats } from '@/entities/chat';
import { SearchInput } from '@/features/search-chats';

const ChatSidebar = () => {
  const { data } = useChats();

  return (
    <aside className="w-full overflow-auto border-r border-slate-300 p-3 md:w-72">
      <SearchInput />
      {data?.map((chat) => (
        <ChatListItem chat={chat} key={chat.id} />
      ))}
    </aside>
  );
};

export default ChatSidebar;
