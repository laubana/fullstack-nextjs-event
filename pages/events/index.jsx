import Head from "next/head";
import { useRouter } from "next/router";

import EventList from "@components/EventList/EventList";
import EventSearch from "@components/EventsSearch/EventSearch";
import { getAllEvents } from "@services/events";

export const getStaticProps = async () => {
  const events = await getAllEvents();

  return { props: { events }, revalidate: 60 };
};

export default (props) => {
  const { events } = props;

  const router = useRouter();

  const handleSearch = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <Head>
        <title>{`${events.length} Events`}</title>
      </Head>
      <EventSearch onSearch={handleSearch} />
      <EventList events={events} />
    </>
  );
};
