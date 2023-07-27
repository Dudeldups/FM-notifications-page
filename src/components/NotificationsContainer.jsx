import { useEffect, useState } from "react";
import Header from "./Header";
import Notification from "./Notification";
import data from "../data/data.json";
import newData from "../data/data-extended.json";

export default function NotificationsContainer() {
  const [notificationData, setNotificationData] = useState(data);
  const [newNotificationData, setNewNotificationData] = useState(newData);
  const [amountUnread, setAmountUnread] = useState(0);

  useEffect(() => {
    setAmountUnread(notificationData.filter(n => n.isUnread).length);
  }, [notificationData]);

  const handleClick = () => {
    setNotificationData(oldData =>
      oldData.map(notification => ({ ...notification, isUnread: false }))
    );
  };

  const getNotification = () => {
    if (newNotificationData.length > 0) {
      setNotificationData(prevData => [
        newNotificationData[newNotificationData.length - 1],
        ...prevData,
      ]);

      setNewNotificationData(prevData => prevData.slice(0, -1));
    }
  };

  const allNotifications = notificationData.map(n => (
    <Notification key={n.id} props={n} />
  ));

  return (
    <main className="max-w-[45.625rem] bg-white px-2 sm:px-4 md:px-[1.875rem] pb-4 rounded-[0.9375rem]">
      <Header
        amountUnread={amountUnread}
        handleClick={handleClick}
        getNotification={getNotification}
      />
      <div className="grid gap-2">{allNotifications}</div>
    </main>
  );
}
