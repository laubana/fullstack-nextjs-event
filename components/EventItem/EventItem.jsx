import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { IoCalendarClearOutline, IoLocationOutline } from "react-icons/io5";

import styles from "./EventItem.module.css";

import Link from "@components/Link/Link";
import { convertDate } from "@helpers/date";

export default ({ event }) => {
  const address = event.location.replace(", ", "\n");

  return (
    <li className={styles.item}>
      <Image src={event.image} alt={event.title} width={240} height={160} />
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
          <Link url={`/events/${event._id}`}>
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
