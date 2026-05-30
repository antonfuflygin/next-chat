'use client';

import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import { useChat } from '../../api';
import { MessageBubble } from '../MessageBubble';
import { chatMessagesPalette } from '@/shared/config/palette';

const chatContentClassName = 'flex h-full min-h-0 w-full flex-col overflow-hidden';

const messageContainerClassName = classNames(
  'scrollbar-hidden flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto p-4 sm:p-4',
  chatMessagesPalette.container
);

interface IChatMessagesProps {
  chatId: string;
}

const ChatMessages = ({ chatId }: IChatMessagesProps) => {
  const { data } = useChat(chatId);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const messagesCount = data?.messages.length ?? 0;

  useEffect(() => {
    const container = messagesContainerRef.current;

    if (!container) {
      return;
    }

    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth',
    });
  }, [messagesCount]);

  return (
    <main className={chatContentClassName}>
      <div className={messageContainerClassName} ref={messagesContainerRef}>
        {data?.messages.map((message) => (
          <MessageBubble key={message.messageId} senderId={message.senderId} text={message.text} />
        ))}
      </div>
    </main>
  );
};

export default ChatMessages;
