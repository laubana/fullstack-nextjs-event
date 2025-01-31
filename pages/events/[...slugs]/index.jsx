import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

import EventList from "@components/EventList/EventList";
import Link from "@components/Link/Link";
import Loader from "@components/Loader/Loader";
import ResultsTitle from "@components/ResultsTitle/ResultsTitle";

export default () => {
  const router = useRouter();

  const slugs = router.query.slugs;

  const { data: eventsData, error: eventsError } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/events`,
    async (...args) => {
      const response = await fetch(...args);
      const json = await response.json();
      return json.data;
    }
  );

  const [events, setEvents] = useState(null);
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);

  useEffect(() => {
    if (eventsData && year && month) {
      setEvents(
        eventsData.filter((event) => {
          const eventDate = new Date(event.date);

          return (
            eventDate.getFullYear() === year &&
            eventDate.getMonth() === month - 1
          );
        })
      );
    }
  }, [eventsData, year, month]);

  useEffect(() => {
    if (slugs) {
      setYear(+slugs[0]);
      setMonth(+slugs[1]);
    }
  }, [slugs]);

  if (!events) {
    return (
      <>
        <Head>
          <title>Loading...</title>
        </Head>
        <Loader />
      </>
    );
  }

  if (
    isNaN(year) ||
    isNaN(month) ||
    year < 2021 ||
    2030 < year ||
    month < 1 ||
    12 < month ||
    eventsError
  ) {
    return (
      <>
        <Head>
          <title>Invalid Input</title>
        </Head>
        <div className="center">
          <p>Invalid Input</p>
          <Link url="/events">Go Back</Link>
        </div>
      </>
    );
  }

  if (events.length === 0) {
    return (
      <>
        <Head>
          <title>{events.length} Events</title>
        </Head>
        <div className="center">
          <p>No events found.</p>
          <Link url="/events">Go Back</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{events.length} Events</title>
      </Head>
      <ResultsTitle date={new Date(year, month - 1)} />
      <EventList events={events} />
    </>
  );
};
