import { format } from 'date-fns';
import Image from 'next/image';
import { IChatListItemType } from '../../model';
import {
  ChatListItemCol,
  ChatListItemWrapper,
  DateTime,
  Message,
  SenderName,
  StyledInline,
  TagCyrcle,
} from './ChatListItem.styles';
import { DATE_FORMATS } from '@/shared/lib/datetime';
import { Avatar } from '@/shared/ui';

interface IChatListItemProps {
  chat: IChatListItemType;
}

const ChatListItem = ({ chat }: IChatListItemProps) => {
  return (
    <ChatListItemWrapper>
      <Avatar width={40} />
      <ChatListItemCol>
        <SenderName>{chat.senderName}</SenderName>
        <Message>{chat.message}</Message>
      </ChatListItemCol>
      <ChatListItemCol justify="end">
        <DateTime>{format(chat.updateTs, `${DATE_FORMATS.WEEK_DAY}, ${DATE_FORMATS.TIME_SHORT}`)}</DateTime>
        {(chat.pinned || chat.newMessageCount) && (
          <StyledInline>
            {chat.newMessageCount && <TagCyrcle>{chat.newMessageCount}</TagCyrcle>}
            {chat.pinned && <Image src="pinned.svg" width={16} height={16} alt="pinnded" />}
          </StyledInline>
        )}
      </ChatListItemCol>
    </ChatListItemWrapper>
  );
};

export default ChatListItem;
