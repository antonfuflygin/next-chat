export interface IChatListItem {
  id: string;
  senderName: string;
  senderAvatar?: string;
  message: string;
  updateTs: string;
  pinned?: boolean;
  newMessageCount?: number;
}
