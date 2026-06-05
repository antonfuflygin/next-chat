import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import MessageInput from './MessageInput';
import '@/app/globals.css';
import { mockChat } from '@/entities/chat/api/mocks';
import type { IChatType } from '@/entities/chat/model/types';

const CHAT_ID = 'test';

const mountMessageInput = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });

  const initialChat = mockChat(CHAT_ID);
  queryClient.setQueryData<IChatType>(['chat'], initialChat);

  cy.mount(
    <QueryClientProvider client={queryClient}>
      <MessageInput />
    </QueryClientProvider>
  );

  return { queryClient, initialChat };
};

describe('<MessageInput />', () => {
  it('отображает textarea и кнопки действий', () => {
    mountMessageInput();

    cy.get('textarea[placeholder="Напишите текст..."]').should('be.visible');
    cy.get('[aria-label="Прикрепить файл"]').should('be.visible');
    cy.get('[aria-label="Отправить сообщение"]').should('be.visible');
  });

  it('отправляет сообщение кнопкой отправки и очищает поле ввода', () => {
    mountMessageInput();

    cy.get('textarea').type('Привет из Cypress');
    cy.get('[aria-label="Отправить сообщение"]').click();

    cy.get('textarea').should('have.value', '');
  });

  it('отправляет сообщение по Enter и очищает поле ввода', () => {
    mountMessageInput();

    cy.get('textarea').type('Сообщение по Enter{enter}');

    cy.get('textarea').should('have.value', '');
  });

  it('не отправляет сообщение из одних пробелов', () => {
    mountMessageInput();

    cy.get('textarea').type('   ');
    cy.get('[aria-label="Отправить сообщение"]').click();

    cy.get('textarea').should('have.value', '   ');
  });

  it('добавляет новое сообщение в кэш чата при отправке', () => {
    const { queryClient, initialChat } = mountMessageInput();
    const messageText = 'Новое сообщение';

    cy.get('textarea').type(messageText);
    cy.get('[aria-label="Отправить сообщение"]').click();

    cy.then(() => {
      const chat = queryClient.getQueryData<IChatType>(['chat']);

      expect(chat?.messages).to.have.length(initialChat.messages.length + 1);
      expect(chat?.messages.at(-1)?.text).to.eq(messageText);
      expect(chat?.messages.at(-1)?.senderId).to.eq('me');
    });
  });

  it('вставляет перенос строки по Shift+Enter вместо отправки', () => {
    mountMessageInput();

    cy.get('textarea').type('строка 1{shift}{enter}строка 2');

    cy.get('textarea').should('have.value', 'строка 1\nстрока 2');
  });

  it('не отправляет сообщение при клике на кнопку вложения', () => {
    const { queryClient, initialChat } = mountMessageInput();

    cy.get('textarea').type('текст');
    cy.get('[aria-label="Прикрепить файл"]').click();

    cy.get('textarea').should('have.value', 'текст');
    cy.then(() => {
      const chat = queryClient.getQueryData<IChatType>(['chat']);

      expect(chat?.messages).to.have.length(initialChat.messages.length);
    });
  });
});
