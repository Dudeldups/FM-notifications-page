export default function Notification({ props }) {
  const hasLink = "link" in props;

  let containerClassNames =
    "flex gap-[0.8rem] md:gap-[1.2rem] p-4 md:py-[1.1rem] md:px-5 rounded-lg";
  // if (props.isUnread) {
  containerClassNames += " bg-clr-light-blue";
  // }

  return (
    <section className={containerClassNames}>
      <img
        className="w-[2.4375rem] md:w-[2.8125rem] h-[2.4375rem] md:h-[2.8125rem]"
        src={props.avatar}
        alt=""
      />
      <article>
        <a href="#">
          <h2 className="inline font-extrabold text-clr-dark-blue hover:text-clr-blue">
            {props.name}
          </h2>
        </a>
        <p className="inline"> {props.content}</p>
        {hasLink && (
          <a href="#">
            <p className="inline font-extrabold text-clr-grey-blue hover:text-clr-blue">
              {" "}
              test text
            </p>
          </a>
        )}
        {/* {props.isUnread && ( */}
        <span className="w-2 h-2 bg-clr-red rounded-full"></span>
        {/* )} */}
        <footer>
          <p>{props.postTime}</p>
        </footer>
      </article>
    </section>
  );
}
