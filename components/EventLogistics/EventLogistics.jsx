import Image from "next/image";
import { IoCalendarClearOutline, IoLocationOutline } from "react-icons/io5";

import styles from "./EventLogistics.module.css";

import LogisticsItem from "@components/LogisticsItem/LogisticsItem";
import { convertDate } from "@helpers/date";

export default ({ event }) => {
  const address = event.location.replace(", ", "\n");

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <Image src={event.image} alt={event.title} width={320} height={320} />
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
