import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { IChatType } from '../model/types';
import { fetchChat } from './client';
import { mockChatList } from './mocks';

export const useChat = (id: string) => {
  return useQuery({
    queryKey: ['chat'],
    queryFn: () => fetchChat(id),
  });
};

export const useSendMessage = (_id: string) => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationKey: ['sendMessage'],
    mutationFn: async (message: string) => {
      queryClient.setQueryData(['chat'], (old: IChatType) => {
        return {
          ...old,
          messages: [
            ...old.messages,
            {
              messageId: (old.messages.length + 1).toString(),
              senderId: 'me',
              text: message,
            },
          ],
        };
      });
    },
  });
};

export const useChats = () => {
  return useQuery({
    queryKey: ['chatList'],
    queryFn: () => mockChatList,
  });
};
