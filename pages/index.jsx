import EventList from "@components/EventList/EventList";
import NewsLetterRegistration from "@components/NewsLetterRegistration/NewsLetterRegistration";
import { getFeaturedEvents } from "@services/events";

export const getStaticProps = async () => {
  const events = await getFeaturedEvents();

  return { props: { events }, revalidate: 3600 };
};

export default ({ events }) => {
  return (
    <>
      <div>
        <NewsLetterRegistration />
        <EventList events={events} />
      </div>
    </>
  );
};
