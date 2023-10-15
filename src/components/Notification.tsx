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
function Notification(props: {notification:notificationType, notifications:any, setNotifications: any}) {
    const {id,name, reason, image, reactedTo, comment, time, newNotification}
     = props.notification
    const notifications = props.notifications 
    const setNotifications = props.setNotifications 
    function handleClick(id:number) {
      const update = notifications.map((notification:notificationType) => {
        if(notification.id === id) {
          return {...notification, newNotification: false}
      } else {
        return notification
        }
      })
      setNotifications(update)
    }
  return (
      <div onClick={() => handleClick(id)} className={newNotification ? 'bg-[#F7FAFD] mb-2 rounded-lg p-4 flex flex-col' : 'bg-white mb-2 rounded-lg p-4 flex flex-col'  }>
        <div className='flex gap-3 items-start'>
        <img src={image} className="rounded"/>
        <div>
            <p className='text-[14px]'>
                <span className='font-extrabold mr-1'>{name}</span>
                <span className='text-[#5E6778] mr-1'>{reason}</span>
                {reactedTo?.post && <span className='text-[#5E6778] font-bold mr-1'>{reactedTo.post}</span>}
                {reactedTo?.group && <a href="" className="underline text-blue-500">{reactedTo.group}</a>}
                {newNotification && <span className="rounded-full bg-red-500 ml-1">.</span>}
            </p>
            <span className='text-[#939CAD]'>{time}</span>
        {comment?.message && <div className='border border-[#DDE7EE] p-3 mt-2 rounded-lg text-[#5E6778] font-medium active:bg-[#E5EFFA] hover:bg-[#E5EFFA]'>{comment.message}</div>}
        </div>
        {comment?.image && <img src={comment.image} className='rounded-lg ml-auto'/> }
    </div>
    </div>
  )
}

export default Notification