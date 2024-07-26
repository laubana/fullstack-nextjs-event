import styles from "./EventContent.module.css";

export default ({ children }) => {
  return <section className={styles.content}>{children}</section>;
};
