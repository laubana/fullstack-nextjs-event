import EventList from "../components/EventList/EventList";
import { getFeaturedEvents } from "../services/events";

export default () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
};
