import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ChatMessages from './ChatMessages';
import '@/app/globals.css';
import type { IChatType } from '@/entities/chat/model/types';

const CHAT_ID = 'user123';

const mountChatMessages = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });

  cy.mount(
    <QueryClientProvider client={queryClient}>
      <ChatMessages chatId={CHAT_ID} />
    </QueryClientProvider>
  );

  return queryClient;
};

describe('<ChatMessages />', () => {
  beforeEach(() => {
    cy.fixture('chat.json').then((chat) => {
      cy.intercept('GET', `/api/chats/${CHAT_ID}`, {
        statusCode: 200,
        body: {
          success: true,
          errors: '',
          data: chat,
        },
      }).as('getChat');
    });
  });

  it('перехватывает запрос и отображает сообщения из фикстуры', () => {
    mountChatMessages();

    cy.wait('@getChat').its('response.statusCode').should('eq', 200);

    cy.contains('Привет! Как дела?').should('be.visible');
    cy.contains('Да, я с вами!').should('be.visible');
  });

  it('рендерит все сообщения из перехваченного ответа', () => {
    mountChatMessages();

    cy.wait('@getChat')
      .its('response.body.data')
      .then((chat: IChatType) => {
        cy.get('main > div').children().should('have.length', chat.messages.length);

        chat.messages.forEach((message) => {
          cy.contains(message.text).should('exist');
        });
      });
  });
});
