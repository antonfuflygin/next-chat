import { format } from 'date-fns';
import Image from 'next/image';
import { IChatListItemType } from '../../model';
import { DATE_FORMATS } from '@/shared/lib/datetime';
import { Avatar } from '@/shared/ui';

interface IChatListItemProps {
  chat: IChatListItemType;
}

const ChatListItem = ({ chat }: IChatListItemProps) => {
  return (
    <div className="flex w-full cursor-pointer items-center gap-3 px-3 py-4 text-sm font-normal leading-5 hover:bg-sky-100">
      <Avatar width={40} />
      <div className="grid min-w-0 flex-1 gap-1">
        <div className="font-bold text-slate-950">{chat.senderName}</div>
        <div className="truncate text-slate-600">{chat.message}</div>
      </div>
      <div className="grid shrink-0 justify-items-end gap-1">
        <div className="text-slate-400">
          {format(chat.updateTs, `${DATE_FORMATS.WEEK_DAY}, ${DATE_FORMATS.TIME_SHORT}`)}
        </div>
        {(chat.pinned || chat.newMessageCount) && (
          <div className="flex justify-end gap-2">
            {chat.newMessageCount && (
              <div className="flex size-5 items-center justify-center rounded-full bg-sky-500 text-xs text-white">
                {chat.newMessageCount}
              </div>
            )}
            {chat.pinned && <Image src="pinned.svg" width={16} height={16} alt="pinned" />}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatListItem;
