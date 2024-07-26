import { useRouter } from "next/router";
import EventList from "../../../components/EventList/EventList";
import Link from "../../../components/Link/Link";
import Loader from "../../../components/Loader/Loader";
import ResultsTitle from "../../../components/ResultsTitle/ResultsTitle";
import { getFilteredEvents } from "../../../services/events";

export default () => {
  const router = useRouter();

  const slugs = router.query.slugs;

  if (!slugs) {
    return <Loader />;
  }

  const year = +slugs[0];
  const month = +slugs[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year < 2021 ||
    2030 < year ||
    month < 1 ||
    12 < month
  ) {
    return (
      <div className="center">
        <p>Invalid Input</p>
        <Link url="/events">Go Back</Link>
      </div>
    );
  }

  const events = getFilteredEvents({ year, month });

  if (!events || events.length === 0) {
    return (
      <div className="center">
        <p>No events found.</p>
        <Link url="/events">Go Back</Link>
      </div>
    );
  }

  return (
    <>
      <ResultsTitle date={new Date(year, month - 1)} />
      <EventList events={events} />
    </>
  );
};
