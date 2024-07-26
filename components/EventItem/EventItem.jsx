import styles from "./EventItem.module.css";
import { convertDate } from "../../helpers/date";
import Link from "../Link/Link";
import { FaArrowRight } from "react-icons/fa6";
import { IoCalendarClearOutline, IoLocationOutline } from "react-icons/io5";

export default ({ event }) => {
  const address = event.location.replace(", ", "\n");

  return (
    <li className={styles.item}>
      <img src={event.image} alt={event.title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{event.title}</h2>
          <div className={styles.date}>
            <IoCalendarClearOutline />
            <time>{convertDate(event.date)}</time>
          </div>
          <div className={styles.address}>
            <IoLocationOutline />
            <address>{address}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link url={`/events/${event.id}`}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </li>
  );
};
