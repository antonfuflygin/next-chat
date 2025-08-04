'use client';

import Image from 'next/image';
import { FC, useState } from 'react';
import Avatar from '../Avatar/Avatar';
import {
  Action,
  CloseButton,
  Divider,
  DrawerContainer,
  HiddenCheckbox,
  Label,
  Overlay,
  Section,
  Switch,
  Thumb,
  ToggleWrapper,
  UserInfo,
  Value,
} from './Drawer.styles';
import { IDrawerProps } from './types';
import { useChat } from '@/lib/api/chat/useChats';

const Drawer: FC<IDrawerProps> = ({ isOpen, onClose, side = 'right' }) => {
  const { data } = useChat('1');

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleToggle = (checked: boolean) => {
    setNotificationsEnabled(checked);
  };
  return (
    <>
      <Overlay $isopen={isOpen} />
      <DrawerContainer $isopen={isOpen} $side={side}>
        <CloseButton onClick={onClose}>
          <Image src="/close.svg" alt="Close" width={24} height={24} />
        </CloseButton>
        <UserInfo>
          <Avatar width={20} height={20} />
          {data?.contactName}
        </UserInfo>

        <Divider />

        <Section>
          <Label>Имя пользователя: </Label>
          <Value>
            <Action>{data?.contactUserName}</Action>
          </Value>
          <Label>О себе: </Label>
          <Value> Я люблю прогать! </Value>
        </Section>

        <Divider />

        <Section>
          <ToggleWrapper>
            <Label style={{ marginTop: '0' }}>Уведомления</Label>
            <Switch $checked={notificationsEnabled} aria-label="Notifications">
              <HiddenCheckbox
                checked={notificationsEnabled}
                onChange={(e) => handleToggle(e.target.checked)}
                aria-label="Notifications"
              />
              <Thumb $checked={notificationsEnabled} />
            </Switch>
          </ToggleWrapper>
        </Section>

        <Divider />

        <Section>
          <Action>Заблокировать пользователя</Action>
          <Action>Очистить историю</Action>
          <Action>Удалить контакт</Action>
        </Section>
      </DrawerContainer>
    </>
  );
};

export default Drawer;
