import { useRouter } from "next/router";
import EventContent from "../../../components/EventContent/EventContent";
import EventLogistics from "../../../components/EventLogistics/EventLogistics";
import EventSummary from "../../../components/EventSummary/EventSummary";
import Loader from "../../../components/Loader/Loader";
import { getEventById } from "../../../services/events";

export default () => {
  const router = useRouter();

  const eventId = router.query.eventId;

  if (!eventId) {
    return <Loader />;
  }

  const event = getEventById(eventId);

  if (!event) {
    return (
      <div className="center">
        <p>No event found.</p>
      </div>
    );
  }

  return (
    <>
      <EventSummary summary={event.title} />
      <EventLogistics event={event} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};
