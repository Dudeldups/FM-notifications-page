export default function Header({ amountUnread, handleClick, getNotification }) {
  return (
    <header className="flex items-center justify-between py-6 md:py-8">
      <div className="flex items-center">
        <h1 className="mr-2 text-xl md:text-2xl font-extrabold text-clr-dark-blue">
          Notifications
        </h1>
        <span className="bg-clr-blue text-base text-white font-extrabold px-[0.7rem] rounded-[0.375rem]">
          {amountUnread}
        </span>
      </div>
      <button
        className="transition-transform hover:scale-110"
        aria-label="get new notification"
        onClick={getNotification}>
        <img
          className="w-10 h-10"
          src="assets/images/notification-alert-svgrepo-com.svg"
          alt=""
        />
      </button>
      <button
        className="text-clr-grey-blue md:text-base transition-colors  hover:text-clr-blue"
        onClick={handleClick}>
        Mark all as read
      </button>
    </header>
  );
}
