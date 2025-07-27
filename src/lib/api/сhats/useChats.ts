import { useQuery } from '@tanstack/react-query';
import { mockChatList } from './mocks';

export const useChats = () => {
  return useQuery({
    queryKey: ['chatList'],
    queryFn: () => mockChatList,
  });
};
