import styles from "./EventList.module.css";

import EventItem from "@components/EventItem/EventItem";

export default ({ events }) => {
  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <EventItem key={event._id} event={event} />
      ))}
    </ul>
  );
};
