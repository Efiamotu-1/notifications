import Navbar from './components/Navbar'
import Notification from './components/Notification'

import Image1 from './assets/image-1.png'
import Image2 from './assets/image-2.png'
import Image3 from './assets/image-3.png'
import Image4 from './assets/image-4.png'
import Image5 from './assets/image-5.png'
import Image6 from './assets/image-6.png'
import Image7 from './assets/image-7.png'
import Image8 from './assets/image-8.png'
import { useState } from 'react'

interface notificationType  {
  id: number;
  newNotification?: boolean;
  image: any;
  name: string;
  reason?: string;
  reactedTo? : {
    post?: string;
    group?: string;
  };
  comment?: {
    image?: any;
    message?: string;
  };
  time: string
}
const notificationDetails = [
  {
    id: 1,
    image: Image1,
    name: 'Mark Webber',
    reason: 'reacted to your recent post',
    reactedTo: {
      post: 'My First tournament today!',
    },
    time: '1m ago',
    newNotification: true
  },
  {
    id: 2,
    image: Image2,
    name: 'Angela Gray',
    reason: 'followed you',
    newNotification: true,
    time: '5m ago'
  },
  {
    id: 3,
    image: Image3,
    name: 'Jacob Thompson',
    reason: 'has joined your group',
    reactedTo: {
      group: 'Chess club'
    },
    time: '1 day ago',
    newNotification: true
  },
  {
    id: 4,
    image: Image4,
    name: 'Rizky Hasanuddin',
    reason: 'sent you a private message',
    comment: {
      message: 'Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.',
    },
    time: '5 days ago'
  },
  {
    id: 5,
    image: Image5,
    name: 'Kimberly Smith',
    reason: 'commented on your picture',
    comment: {
      image: Image8
    },
    time: '1 week ago'
  },
  {
    id: 6,
    image: Image6,
    name: 'Nathan Peterson',
    reason: 'reacted to your recent post',
    reactedTo: {
      post: '5 end-game strategies to increase your win rate'
    },
    time: '2 weeks ago8'
  },
  {
    id: 7,
    image: Image7,
    name: 'Anna Kim',
    reactedTo: {
      group: 'Chess Club'
    },
    time: '2 weeks ago'
  }
]

function App() {
  const [notifications, setNotifications] = useState(notificationDetails) 
  return (
    <div className='md:max-w-[730px] md:m-auto md:bg-white md:p-5'>
      <Navbar notifications={notifications} setNotifications={setNotifications}/>
      {notifications.map((notify:notificationType) => {
        return <Notification notification={notify} key={notify.id} notifications={notifications} setNotifications={setNotifications}/>
      })}
      
    </div>
  )
}

export default App
