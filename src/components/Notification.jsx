export default function Notification({ props }) {
  const hasLink = "link" in props;
  const hasImg = "img" in props;

  let containerClassNames =
    "flex gap-[0.8rem] md:gap-[1.2rem] p-4 md:py-[1.1rem] md:px-5 rounded-lg";
  if (props.isUnread) {
    containerClassNames += " bg-clr-light-blue";
  }

  return (
    <section className={containerClassNames}>
      <a href="#">
        <img
          className="w-[2.4375rem] md:w-[2.8125rem] h-[2.4375rem] md:h-[2.8125rem] transition-transform hover:scale-110"
          src={props.avatar}
          alt=""
        />
      </a>
      <article className="md:text-base">
        <a href="#">
          <h2 className="inline font-extrabold text-clr-dark-blue transition-colors hover:text-clr-blue">
            {props.name}
          </h2>
        </a>
        <p className="inline ml-[0.5em] text-clr-grey-blue">{props.content}</p>
        {hasLink && (
          <a href="#">
            <p className="inline ml-[0.5em] font-extrabold text-clr-grey-blue transition-colors hover:text-clr-blue">
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
      </article>
      {hasImg && (
        <img
          className="w-[2.4375rem] md:w-[2.8125rem] h-[2.4375rem] md:h-[2.8125rem] ml-auto"
          src={props.img}
          alt=""
        />
      )}
    </section>
  );
}
