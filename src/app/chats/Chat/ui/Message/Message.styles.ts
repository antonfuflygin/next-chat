import styled from 'styled-components';

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  height: 83vh;
  overflow: auto;
`;

export const MessageBubble = styled.div<{ $senderId: string }>`
  align-self: ${({ $senderId }) => ($senderId === 'me' ? 'flex-end' : 'flex-start')};
  background-color: ${({ $senderId }) => ($senderId === 'me' ? '#e8f2fe' : '#eef1f4')};
  color: #000;
  padding: 16px;
  border-radius: 16px;
  border-bottom-right-radius: ${({ $senderId }) => ($senderId === 'me' ? '0' : '16px')};
  border-bottom-left-radius: ${({ $senderId }) => ($senderId === 'me' ? '16px' : '0')};
  max-width: 50%;
  word-break: break-word;
  font-size: 14px;
  box-shadow: 0px 5px 5px #c2c2c2;
`;

export const MessageTime = styled.span`
  display: block;
  font-size: 10px;
  color: #888;
  text-align: right;
  margin-top: 4px;
`;
