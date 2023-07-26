import { useEffect, useState } from "react";
import Header from "./Header";
import Notification from "./Notification";
import data from "../data/data.json";

export default function NotificationsContainer() {
  const [notificationData, setNotificationData] = useState(data);
  const [amountUnread, setAmountUnread] = useState(0);

  useEffect(() => {
    setAmountUnread(notificationData.filter(n => n.isUnread).length);

    // return () => {
    // }
  }, [notificationData]);

  const allNotifications = notificationData.map(n => (
    <Notification key={n.id} props={n} />
  ));

  return (
    <main className="bg-white px-4 md:px-6">
      <Header amountUnread={amountUnread} />
      <div className="grid gap-2">{allNotifications}</div>
    </main>
  );

  // const handleClick = (e) => {

  // }
}
