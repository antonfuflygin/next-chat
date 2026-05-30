'use client';

import cn from 'classnames';
import { ArrowBigUpDash, SquarePlus } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSendMessage } from '@/entities/chat/api/queries';
import { messageInputPalette } from '@/shared/config/palette';

const getFormClassName = (isTextareaExpanded: boolean) =>
  cn(
    'flex min-h-15 w-full gap-2 border cursor-text bg-white',
    isTextareaExpanded ? 'items-start' : 'items-center',
    messageInputPalette.wrapper
  );

const textareaClassName = cn(
  'min-h-10 max-h-[80vh] flex-1 resize-none overflow-y-auto bg-transparent p-2 text-sm outline-none',
  messageInputPalette.textarea
);

const iconButtonClassName = cn(
  'grid size-10 cursor-pointer place-items-center rounded-full transition-colors',
  messageInputPalette.icon
);

const btnGroupWrapperClassName = 'flex shrink-0 items-center gap-1';

type FormData = {
  message: string;
};

const MessageInput: React.FC = () => {
  const { register, handleSubmit, reset, watch } = useForm<FormData>({
    defaultValues: {
      message: '',
    },
  });
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isTextareaExpanded, setIsTextareaExpanded] = useState(false);
  const messageValue = watch('message');
  const { mutateAsync: sendMessage } = useSendMessage('test');
  const { ref: messageRef, ...messageRegister } = register('message', {
    required: true,
  });

  useEffect(() => {
    const textarea = textareaRef.current;

    if (!textarea) {
      return;
    }

    const computedStyle = window.getComputedStyle(textarea);
    const lineHeight = Number.parseFloat(computedStyle.lineHeight);
    const paddingTop = Number.parseFloat(computedStyle.paddingTop);
    const paddingBottom = Number.parseFloat(computedStyle.paddingBottom);
    const singleLineHeight = lineHeight + paddingTop + paddingBottom;

    textarea.style.height = 'auto';
    setIsTextareaExpanded(textarea.scrollHeight > singleLineHeight + 1);
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [messageValue]);

  const onSubmit = async (data: FormData) => {
    const message = data.message.trim();

    if (!message) {
      return;
    }

    await sendMessage(message);
    reset();
  };

  const handleWrapperClick = (e: React.MouseEvent<HTMLFormElement>) => {
    const target = e.target as HTMLElement;

    if (target.closest('button')) {
      return;
    }

    textareaRef.current?.focus();
  };

  const handleTextareaRef = (element: HTMLTextAreaElement | null) => {
    textareaRef.current = element;
    messageRef(element);
  };

  const handleTextareaKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== 'Enter' || e.shiftKey) {
      return;
    }

    e.preventDefault();
    handleSubmit(onSubmit)();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={getFormClassName(isTextareaExpanded)}
      onClick={handleWrapperClick}
    >
      <textarea
        className={textareaClassName}
        placeholder="Напишите текст..."
        rows={1}
        onKeyDown={handleTextareaKeyDown}
        {...messageRegister}
        ref={handleTextareaRef}
      />
      <div className={btnGroupWrapperClassName}>
        <button className={iconButtonClassName} type="button" aria-label="Прикрепить файл">
          <SquarePlus />
        </button>
        <button className={iconButtonClassName} type="submit" aria-label="Отправить сообщение">
          <ArrowBigUpDash />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
