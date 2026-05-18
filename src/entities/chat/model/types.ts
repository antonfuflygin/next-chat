export interface IMessageType {
  messageId: string;
  senderId: string;
  text: string;
  datetimeTs: string;
  hasBeenRead: string;
}

export interface IChatType {
  contactId: string;
  contactName: string;
  contactUserName: string;
  isOnline: boolean;
  onlineDateTimeTs?: string;
  messages: IMessageType[];
}

export interface IChatListItemType {
  id: string;
  senderName: string;
  senderAvatar?: string;
  message: string;
  updateTs: string;
  pinned?: boolean;
  newMessageCount?: number;
}
