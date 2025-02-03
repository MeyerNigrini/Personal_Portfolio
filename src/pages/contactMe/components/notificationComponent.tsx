// src/components/NotificationComponent.tsx
import { Notification } from '@mantine/core';

interface Props {
  message: string;
  onClose: () => void;
}

const NotificationComponent = ({ message, onClose }: Props) => {
  return (
    <Notification title="Message Status" onClose={onClose} color={message.includes('Thank you') ? 'green' : 'red'}>
      {message}
    </Notification>
  );
};

export default NotificationComponent;
