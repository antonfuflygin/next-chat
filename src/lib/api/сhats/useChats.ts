import { useQuery } from '@tanstack/react-query';
import { mockChatList } from './mocks';

export const useChats = () => {
  const fetchChatList = useQuery({
    queryKey: ['chatList'],
    queryFn: () => mockChatList,
  });

  return {
    fetchChatList,
  };
};
