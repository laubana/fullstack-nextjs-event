import EventList from "../components/EventList/EventList";
import { getFeaturedEvents } from "../services/events";

export const getStaticProps = async () => {
  const events = await getFeaturedEvents();

  return { props: { events }, revalidate: 600 };
};

export default (props) => {
  const { events } = props;

  return (
    <>
      <div>
        <EventList events={events} />
      </div>
    </>
  );
};
