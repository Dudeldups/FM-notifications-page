import Header from "./Header";
import Notification from "./Notification";

export default function NotificationsContainer() {
  const notifications = "test";

  const amountUnread = 3; // Filter x => !x.isRead

  return (
    <>
      <Header amountUnread={amountUnread} />
      {notifications}
    </>
  );
}
