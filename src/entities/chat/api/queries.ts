import { useQuery } from '@tanstack/react-query';
import { mockChat, mockChatList } from './mocks';

export const useChat = (id: string) => {
  return useQuery({
    queryKey: ['chat', id],
    queryFn: () => mockChat(id),
  });
};

export const useChats = () => {
  return useQuery({
    queryKey: ['chatList'],
    queryFn: () => mockChatList,
  });
};
