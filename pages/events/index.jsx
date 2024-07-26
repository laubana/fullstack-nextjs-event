import { useRouter } from "next/router";
import EventList from "../../components/EventList/EventList";
import EventSearch from "../../components/EventsSearch/EventSearch";
import { getAllEvents } from "../../services/events";

export default () => {
  const router = useRouter();

  const events = getAllEvents();

  const handleSearch = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <EventSearch onSearch={handleSearch} />
      <EventList events={events} />
    </>
  );
};
