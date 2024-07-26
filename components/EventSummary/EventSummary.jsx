import styles from "./EventSummary.module.css";

export default ({ summary }) => {
  return (
    <section className={styles.summary}>
      <h1>{summary}</h1>
    </section>
  );
};
