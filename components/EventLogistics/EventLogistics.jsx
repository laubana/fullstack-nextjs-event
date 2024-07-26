import { IoCalendarClearOutline, IoLocationOutline } from "react-icons/io5";
import styles from "./EventLogistics.module.css";
import LogisticsItem from "../LogisticsItem/LogisticsItem";
import { convertDate } from "../../helpers/date";

export default ({ event }) => {
  const address = event.location.replace(", ", "\n");

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <img src={event.image} alt={event.title} />
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={() => <IoCalendarClearOutline />}>
          <time>{convertDate(event.date)}</time>
        </LogisticsItem>
        <LogisticsItem icon={() => <IoLocationOutline />}>
          <address>{address}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};
