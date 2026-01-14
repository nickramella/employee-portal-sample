import React from 'react'
import NotificationElement from './NotificationElement'
import { Notification } from '@/types/Notification'

const NotificationList = () => {
  const exampleNotif: Notification =  {type: "standard", text: "Example"}
  return (
    <div className='h-100 w-100'>
        <div className='bg-purple-500 w-full h-10 text-white items-center pl-4 pt-2'>Notifications</div>
        <div className='scroll-auto bg-white'>
          <NotificationElement notification={exampleNotif} />
        </div>
    </div>
  )
}

export default NotificationList