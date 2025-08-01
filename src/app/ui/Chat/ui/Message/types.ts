export interface IMessageProps {
  id: string;
  text: string;
  isOwn: boolean;
}

export interface TMessageProps {
  messages: IMessageProps[];
}
