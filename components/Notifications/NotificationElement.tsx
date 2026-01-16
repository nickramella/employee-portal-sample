import React from 'react';
import { Notification } from '@/types/Notification';
import BoltIcon from '@mui/icons-material/Bolt';
import Link from 'next/link';

interface NotificationElementProps {
  notification: Notification;
}

const NotificationElement = ({notification}: NotificationElementProps) => {
  const getIcon = (type: string) => {
    if (type === "standard") {
      return <BoltIcon />
    }
  }
  return (
      <Link href={notification.link} >
        <div className='text-blue-500 items-center p-2 flex'>
          <div className='px-6'>{getIcon(notification.type)}</div>
          <div>{notification.text}</div>
        </div>
      </Link>
  )
}

export default NotificationElement