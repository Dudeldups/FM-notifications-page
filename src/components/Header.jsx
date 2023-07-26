export default function Header({ amountUnread }) {
  return (
    <header className="flex items-center py-6 md:py-8">
      <h1 className="mr-2 text-xl md:text-2xl font-extrabold text-clr-dark-blue">
        Notifications
      </h1>
      <span className="bg-clr-blue text-base text-white font-extrabold px-[0.7rem] rounded-[0.375rem]">
        {amountUnread}
      </span>
      <button className="ml-auto text-clr-grey-blue md:text-base hover:text-clr-blue">
        Mark all as read
      </button>
    </header>
  );
}
