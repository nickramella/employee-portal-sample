import Widget from "@/components/Widget";
import NotificationElement from "@/components/Notifications/NotificationElement";
import { Notification } from "@/types/Notification"
import EmailIcon from '@mui/icons-material/Email';

export default function Home() {
  const exampleNotif: Notification =  {type: "standard", text: "Example", link: ""}
  return (
    <div className="w-full">
      <Widget title="Notifications">
        <NotificationElement notification={exampleNotif}/>
      </Widget>
      <Widget title="Contact HR">
        <a type="email" href="mailto:fake-hr@example.com">
          <div className="font-semibold text-4xl text-center text-blue-900">HR CONNECTION <EmailIcon/></div>
        </a>
      </Widget>
    </div>
  );
}
