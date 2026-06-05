import { IChatResponseType, IChatType } from '../model/types';

export const fetchChat = async (id: string): Promise<IChatType> => {
  const response = await fetch(`/api/chats/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch chat: ${response.status}`);
  }

  const result: IChatResponseType = await response.json();

  if (!result.success) {
    throw new Error(result.errors || 'Failed to fetch chat');
  }

  return result.data;
};
