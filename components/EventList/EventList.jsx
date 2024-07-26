import EventItem from "../EventItem/EventItem";
import styles from "./EventList.module.css";

export default ({ events }) => {
  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
};
