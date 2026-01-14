import React from 'react';
import { Notification } from '@/types/Notification';

interface NotificationElementProps {
  notification: Notification;
}

const NotificationElement = ({notification}: NotificationElementProps) => {
  return (
    <div className='text-blue-500 p-2 flex'>
      <div className='px-6'>{notification.type}</div>
      <div>{notification.text}</div>
    </div>
  )
}

export default NotificationElement