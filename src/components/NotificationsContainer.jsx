import { useState } from "react";
import Header from "./Header";
import Notification from "./Notification";
import data from "../data/data.json";

export default function NotificationsContainer() {
  const [allNotifications, setAllNotifications] = useState(data);

  const notifications = allNotifications.map(n => {
    // grid: img | content | img
    const classNames = "";
    return (
      <section key={n.id} className="grid gap-[0.8rem] md:gap-[1.2rem]">
        <img
          className="w-[2.4375rem] md:w-[2.8125rem] aspect-square"
          src={n.avatar}
          alt=""
        />
        <article>
          <h2>{n.name}</h2>
          <p>{n.content}</p>
          <footer>
            <p>{n.postTime}</p>
          </footer>
        </article>
      </section>
    );
  });

  const amountUnread = allNotifications.filter(n => n.isUnread).length;

  return (
    <div className="bg-white px-4 md:px-6">
      <Header amountUnread={amountUnread} />
      {notifications}
    </div>
  );
}
