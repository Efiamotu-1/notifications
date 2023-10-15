interface notificationType  {
  id: number;
  newNotification?: boolean;
  image: any;
  name: string;
  reason?:string;
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
export default function Navbar(props:{notifications: any, setNotifications: any}) {
  const notifications = props.notifications
  const setNotifications = props.setNotifications
  let count = 0
  notifications.map((notification:notificationType) => {
    if(notification.newNotification) {
      count++
    }
  })
  function clearNotification():void {
    const update = notifications.map((notification:notificationType) => {
      if(notification.newNotification){
      return {...notification, newNotification: false}
      } else {
        return notification
      }
    })
    setNotifications(update)
  }
  return (
    <nav className="flex justify-between mb-4 items-end">
      <div className="flex items-end">
        <span className="font-extrabold text-[20px] text-[#1C202B]">Notifications</span>
        <button className="ml-2 bg-[#0A327B] px-4 py-1 text-white rounded-lg font-extrabold">{count}</button>
      </div>
      <div className="font-medium text-[#5E6778] cursor-pointer" onClick={clearNotification}>Mark all as read</div>
    </nav>
  )
}
