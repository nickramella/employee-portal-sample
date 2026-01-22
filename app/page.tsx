import Widget from "@/components/Widget";
import NotificationElement from "@/components/Notifications/NotificationElement";
import { Notification } from "@/types/Notification"

export default function Home() {
  const exampleNotif: Notification =  {type: "standard", text: "Example", link: ""}
  return (
    <div className="w-full">
      <Widget title="Notifications">
        <NotificationElement notification={exampleNotif}/>
      </Widget>
    </div>
  );
}
