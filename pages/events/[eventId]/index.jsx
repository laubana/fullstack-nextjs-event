import Head from "next/head";

import Comments from "@components/Comments/Comments";
import EventContent from "@components/EventContent/EventContent";
import EventLogistics from "@components/EventLogistics/EventLogistics";
import EventSummary from "@components/EventSummary/EventSummary";
import Loader from "@components/Loader/Loader";
import { getEvent, getFeaturedEvents } from "@services/events";

export const getStaticProps = async (context) => {
  const { params } = context;

  const { eventId } = params;

  const event = await getEvent(eventId);

  if (!event) {
    return { notFound: true };
  }

  return { props: { event }, revalidate: 30 };
};

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();

  return {
    paths: events.map((event) => ({ params: { eventId: event._id } })),
    fallback: true,
  };
};

export default (props) => {
  const { event } = props;

  if (!event) {
    return (
      <>
        <Head>
          <title>Loading...</title>
        </Head>
        <Loader />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
      </Head>
      <EventSummary summary={event.title} />
      <EventLogistics event={event} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event._id} />
    </>
  );
};
