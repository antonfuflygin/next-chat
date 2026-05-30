import classNames from 'classnames';
import { messageBubblePalette } from '@/shared/config/palette';

interface IMessageBubbleProps {
  senderId: string;
  text: string;
}

const getMessageBubbleClassName = (senderId: string) =>
  classNames(
    'min-h-10 max-w-xs break-words rounded-2xl p-2 text-sm sm:max-w-md md:max-w-lg',
    messageBubblePalette.text,
    senderId === 'me'
      ? ['self-end rounded-br-none', messageBubblePalette.own]
      : ['self-start rounded-bl-none', messageBubblePalette.incoming]
  );

const MessageBubble = ({ senderId, text }: IMessageBubbleProps) => {
  return <div className={getMessageBubbleClassName(senderId)}>{text}</div>;
};

export default MessageBubble;
