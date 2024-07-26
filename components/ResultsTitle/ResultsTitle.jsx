import { convertYearMonth } from "../../helpers/date";
import Link from "../Link/Link";
import styles from "./ResultsTitle.module.css";

function ResultsTitle({ date }) {
  return (
    <section className={styles.title}>
      <h1>Events in {convertYearMonth(date)}</h1>
      <Link url="/events">Show All Events</Link>
    </section>
  );
}

export default ResultsTitle;
