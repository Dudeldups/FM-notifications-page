export default function Notification({ props }) {
  const hasLink = "link" in props;
  const hasImg = "img" in props;
  const hasMsg = "privateMessage" in props;

  let containerClassNames =
    "flex gap-[0.8rem] md:gap-[1.2rem] p-2 sm:p-4 md:py-[1.1rem] md:px-5 rounded-lg";
  if (props.isUnread) {
    containerClassNames += " bg-clr-snow";
  }

  return (
    <section className={containerClassNames}>
      <a
        className="shrink-0"
        href="#"
        aria-label={`visit profile of ${props.name}`}>
        <img
          className="w-[2.4375rem] md:w-[2.8125rem] h-[2.4375rem] md:h-[2.8125rem] transition-transform hover:scale-110"
          src={props.avatar}
          alt=""
        />
      </a>
      <article className="md:text-base">
        <a href="#">
          <h2 className="inline-block font-extrabold text-clr-dark-blue transition-colors hover:text-clr-blue">
            {props.name}
          </h2>
        </a>
        <p className="inline ml-[0.5em] text-clr-grey-blue">{props.content}</p>
        {hasLink && (
          <a href="#">
            <p className="inline ml-[0.25em] font-extrabold text-clr-grey-blue transition-colors hover:text-clr-blue">
              {props.link}
            </p>
          </a>
        )}
        {props.isUnread && (
          <span className="inline-block ml-[0.4em] w-2 h-2 bg-clr-red rounded-full"></span>
        )}
        <footer>
          <p className="text-clr-grey-blue">{props.postTime}</p>
        </footer>
        {hasMsg && (
          <a href="#">
            <div className="block mt-[0.8rem] py-4 px-5 border rounded-md hover:bg-clr-light-blue">
              <p className="text-clr-grey-blue whitespace-pre-wrap">
                {props.privateMessage}
              </p>
            </div>
          </a>
        )}
      </article>
      {hasImg && (
        <a className="ml-auto shrink-0" href="#" aria-label="open image">
          <img
            className="w-[2.4375rem] md:w-[2.8125rem] h-[2.4375rem] md:h-[2.8125rem] transition-transform hover:scale-110"
            src={props.img}
            alt=""
          />
        </a>
      )}
    </section>
  );
}
