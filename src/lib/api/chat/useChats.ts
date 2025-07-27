import { useQuery } from '@tanstack/react-query';
import { mockChat } from './mocks';

export const useChat = (id: string) => {
  return useQuery({
    queryKey: ['chat', id],
    queryFn: () => mockChat(id),
  });
};
