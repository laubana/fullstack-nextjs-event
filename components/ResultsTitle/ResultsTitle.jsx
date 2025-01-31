import styles from "./ResultsTitle.module.css";

import Link from "@components/Link/Link";
import { convertYearMonth } from "@helpers/date";

function ResultsTitle({ date }) {
  return (
    <section className={styles.title}>
      <h1>Events in {convertYearMonth(date)}</h1>
      <Link url="/events">Show All Events</Link>
    </section>
  );
}

export default ResultsTitle;
