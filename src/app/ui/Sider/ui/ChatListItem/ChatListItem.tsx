import { format } from 'date-fns';
import Image from 'next/image';
import {
  ChatListItemCol,
  ChatListItemWrapper,
  DateTime,
  Message,
  SenderName,
  StyledInline,
  TagCyrcle,
} from './ChatListItem.styles';
import { IChatListItemType } from '@/lib/api/сhats/types';
import { DATE_FORMATS } from '@/lib/const/datetime';
import Avatar from '@/ui/Avatar/Avatar';

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
