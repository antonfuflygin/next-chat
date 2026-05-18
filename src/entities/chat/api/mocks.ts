import { IChatListItemType, IChatType } from '../model';

export const mockChat = (_id: string): IChatType => ({
  contactId: 'user123',
  contactName: 'Emma Johnson',
  contactUserName: 'emma_j',
  isOnline: true,
  onlineDateTimeTs: '2023-05-20T14:25:00Z',
  messages: [
    {
      messageId: '1',
      senderId: 'user123',
      text: 'Привет! Как дела?',
      datetimeTs: '2023-05-20T10:00:00Z',
      hasBeenRead: 'true',
    },
    {
      messageId: '2',
      senderId: 'me',
      text: 'Привет! Все отлично, спасибо!',
      datetimeTs: '2023-05-20T10:02:00Z',
      hasBeenRead: 'true',
    },
    {
      messageId: '3',
      senderId: 'user123',
      text: 'Что планируешь на выходные?',
      datetimeTs: '2023-05-20T10:05:00Z',
      hasBeenRead: 'true',
    },
    {
      messageId: '4',
      senderId: 'me',
      text: 'Пока не решил, может быть поеду за город',
      datetimeTs: '2023-05-20T10:07:00Z',
      hasBeenRead: 'true',
    },
    {
      messageId: '5',
      senderId: 'user123',
      text: 'Здорово! Мы с друзьями собираемся в поход',
      datetimeTs: '2023-05-20T10:10:00Z',
      hasBeenRead: 'true',
    },
    {
      messageId: '6',
      senderId: 'me',
      text: 'Круто! Куда именно?',
      datetimeTs: '2023-05-20T10:12:00Z',
      hasBeenRead: 'true',
    },
    {
      messageId: '7',
      senderId: 'user123',
      text: 'В лесной массив около озера',
      datetimeTs: '2023-05-20T10:15:00Z',
      hasBeenRead: 'true',
    },
    {
      messageId: '8',
      senderId: 'me',
      text: 'Будет хорошая погода?',
      datetimeTs: '2023-05-20T10:18:00Z',
      hasBeenRead: 'true',
    },
    {
      messageId: '9',
      senderId: 'user123',
      text: 'Да, по прогнозу солнечно',
      datetimeTs: '2023-05-20T10:20:00Z',
      hasBeenRead: 'true',
    },
    {
      messageId: '10',
      senderId: 'me',
      text: 'Отличная новость!',
      datetimeTs: '2023-05-20T10:22:00Z',
      hasBeenRead: 'true',
    },
    {
      messageId: '11',
      senderId: 'user123',
      text: 'Может присоединишься?',
      datetimeTs: '2023-05-20T10:25:00Z',
      hasBeenRead: 'true',
    },
    {
      messageId: '12',
      senderId: 'me',
      text: 'Спасибо за приглашение, подумаю',
      datetimeTs: '2023-05-20T10:28:00Z',
      hasBeenRead: 'true',
    },
    {
      messageId: '13',
      senderId: 'user123',
      text: 'Давай до завтра решим',
      datetimeTs: '2023-05-20T10:30:00Z',
      hasBeenRead: 'true',
    },
    {
      messageId: '14',
      senderId: 'me',
      text: 'Хорошо, я сообщу',
      datetimeTs: '2023-05-20T10:32:00Z',
      hasBeenRead: 'true',
    },
    {
      messageId: '15',
      senderId: 'user123',
      text: 'Какие вещи нужно взять с собой?',
      datetimeTs: '2023-05-20T13:45:00Z',
      hasBeenRead: 'true',
    },
    {
      messageId: '16',
      senderId: 'me',
      text: 'Спальник, палатку, еду на 2 дня',
      datetimeTs: '2023-05-20T13:48:00Z',
      hasBeenRead: 'true',
    },
    {
      messageId: '17',
      senderId: 'user123',
      text: 'Спасибо за советы!',
      datetimeTs: '2023-05-20T13:50:00Z',
      hasBeenRead: 'true',
    },
    {
      messageId: '18',
      senderId: 'me',
      text: 'Не за что, всегда рад помочь',
      datetimeTs: '2023-05-20T13:52:00Z',
      hasBeenRead: 'true',
    },
    {
      messageId: '19',
      senderId: 'user123',
      text: 'Ты уже решил по поводу выходных?',
      datetimeTs: '2023-05-20T14:20:00Z',
      hasBeenRead: 'false',
    },
    {
      messageId: '20',
      senderId: 'me',
      text: 'Да, я с вами!',
      datetimeTs: '2023-05-20T14:25:00Z',
      hasBeenRead: 'false',
    },
  ],
});

export const mockChatList: IChatListItemType[] = [
  {
    id: '1',
    senderName: 'Алексей Иванов',
    senderAvatar: 'https://example.com/avatars/alexey.jpg',
    message: 'Привет, как дела?',
    updateTs: '2023-05-15T10:30:00Z',
    newMessageCount: 1,
    pinned: true,
  },
  {
    id: '2',
    senderName: 'Мария Петрова',
    senderAvatar: 'https://example.com/avatars/maria.jpg',
    message: 'Документы готовы к отправке',
    updateTs: '2023-05-15T09:15:00Z',
  },
  {
    id: '3',
    senderName: 'Дмитрий Смирнов',
    message: 'Встреча переносится на 16:00',
    updateTs: '2023-05-14T17:45:00Z',
    pinned: true,
  },
  {
    id: '4',
    senderName: 'Елена Васильева',
    senderAvatar: 'https://example.com/avatars/elena.jpg',
    message: 'Спасибо за помощь!',
    updateTs: '2023-05-14T16:20:00Z',
    newMessageCount: 2,
  },
  {
    id: '5',
    senderName: 'Иван Козлов',
    message: 'Когда будет готов отчет?',
    updateTs: '2023-05-14T15:10:00Z',
  },
  {
    id: '6',
    senderName: 'Ольга Новикова',
    senderAvatar: 'https://example.com/avatars/olga.jpg',
    message: 'Отправила вам файлы на проверку',
    updateTs: '2023-05-13T14:05:00Z',
  },
  {
    id: '7',
    senderName: 'Сергей Федоров',
    message: 'Давайте созвонимся завтра',
    updateTs: '2023-05-13T12:30:00Z',
    newMessageCount: 5,
  },
  {
    id: '8',
    senderName: 'Анна Морозова',
    senderAvatar: 'https://example.com/avatars/anna.jpg',
    message: 'Готово ли ТЗ?',
    updateTs: '2023-05-12T11:15:00Z',
    pinned: true,
  },
  {
    id: '9',
    senderName: 'Павел Волков',
    message: 'Нужна ваша консультация',
    updateTs: '2023-05-12T10:00:00Z',
  },
  {
    id: '10',
    senderName: 'Татьяна Белова',
    senderAvatar: 'https://example.com/avatars/tatiana.jpg',
    message: 'Когда сможете приехать?',
    updateTs: '2023-05-11T09:45:00Z',
  },
  {
    id: '11',
    senderName: 'Андрей Лебедев',
    message: 'Отчет утвержден',
    updateTs: '2023-05-10T18:30:00Z',
  },
  {
    id: '12',
    senderName: 'Наталья Соколова',
    senderAvatar: 'https://example.com/avatars/natalia.jpg',
    message: 'Жду вашего ответа',
    updateTs: '2023-05-10T17:20:00Z',
  },
  {
    id: '13',
    senderName: 'Артем Попов',
    message: 'Спасибо за оперативность!',
    updateTs: '2023-05-09T16:10:00Z',
  },
  {
    id: '14',
    senderName: 'Юлия Воробьева',
    senderAvatar: 'https://example.com/avatars/julia.jpg',
    message: 'Когда следующий созвон?',
    updateTs: '2023-05-08T15:00:00Z',
  },
  {
    id: '15',
    senderName: 'Михаил Орлов',
    message: 'Проект запущен',
    updateTs: '2023-05-07T14:45:00Z',
  },
  {
    id: '16',
    senderName: 'Екатерина Зайцева',
    senderAvatar: 'https://example.com/avatars/ekaterina.jpg',
    message: 'Нужны дополнительные данные',
    updateTs: '2023-05-06T13:30:00Z',
  },
  {
    id: '17',
    senderName: 'Виктор Павлов',
    message: 'Все ли вам понятно?',
    updateTs: '2023-05-05T12:15:00Z',
  },
  {
    id: '18',
    senderName: 'Светлана Кузнецова',
    senderAvatar: 'https://example.com/avatars/svetlana.jpg',
    message: 'Жду ваших правок',
    updateTs: '2023-05-04T11:00:00Z',
  },
  {
    id: '19',
    senderName: 'Константин Николаев',
    message: 'Согласен с предложением',
    updateTs: '2023-05-03T10:45:00Z',
  },
  {
    id: '20',
    senderName: 'Алиса Дмитриева',
    senderAvatar: 'https://example.com/avatars/alice.jpg',
    message: 'Спасибо за сотрудничество!',
    updateTs: '2023-05-02T09:30:00Z',
    pinned: true,
  },
]
  .reduce<IChatListItemType[][]>((acc, curr) => {
    if (curr.pinned) {
      if (acc[0]) {
        acc[0].push(curr);
      } else {
        acc[0] = [curr];
      }
    } else {
      if (acc[1]) {
        acc[1].push(curr);
      } else {
        acc[1] = [curr];
      }
    }

    return acc;
  }, [])
  .flat();
