'use client';

import classNames from 'classnames';
import { ChatMessages } from '@/entities/chat';
import { MessageInput } from '@/features/send-message';
import { chatLayoutPalette } from '@/shared/config/palette';
import { AppHeader } from '@/widgets/app-header';

const ChatLayoutDenseWorkspace = () => {
  return (
    <div className={classNames('h-dvh overflow-hidden', chatLayoutPalette.page)}>
      <div
        className={classNames(
          'flex h-full min-h-0 overflow-hidden [&_aside]:hidden [&_aside]:w-72 [&_aside]:shrink-0 [&_aside]:border-r md:[&_aside]:block',
          chatLayoutPalette.sidebar
        )}
      >
        <section
          className={classNames('flex h-full min-w-0 flex-1 flex-col overflow-hidden', chatLayoutPalette.workspace)}
        >
          <AppHeader />
          <div
            className={classNames('flex min-h-0 flex-1 flex-col overflow-hidden pt-[56px]', chatLayoutPalette.composer)}
          >
            <ChatMessages chatId="1" />
            <MessageInput />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChatLayoutDenseWorkspace;
