export default function Header({ amountUnread }) {
  return (
    <header className="flex items-center px-4 md:px-6 py-6 md:py-8">
      <p className="mr-2">Notifications</p>
      <span className="">{amountUnread}</span>
      <button className="ml-auto">Mark all as read</button>
    </header>
  );
}
