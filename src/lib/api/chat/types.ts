export interface IMessageType {
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
