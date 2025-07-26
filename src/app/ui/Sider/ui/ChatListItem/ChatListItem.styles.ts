import styled from 'styled-components';

export const ChatListItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 10% 50% 35%;
  width: 100%;
  gap: 10px;
  align-items: center;
  padding: 16px 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0%;
  vertical-align: middle;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }
`;

export const SenderName = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.typography.default};
`;

export const ChatListItemCol = styled.div<{ justify?: 'start' | 'end' }>`
  display: grid;
  gap: 5px;
  justify-self: ${({ justify }) => justify};
`;

export const Message = styled.div`
  color: ${({ theme }) => theme.colors.typography.secondary};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const DateTime = styled.div`
  display: flex;
  justify-content: end;
  color: ${({ theme }) => theme.colors.typography.tertiary};
`;

export const TagCyrcle = styled.div<{ backgroundColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
  width: 20px;
  border-radius: 50%;
  background: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.info};
  color: #fff;
  font-size: 12px;
`;

export const StyledInline = styled.div`
  display: flex;
  justify-content: end;
  gap: 8px;
`;
