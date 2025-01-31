import Link from "next/link";

import styles from "./Link.module.css";

export default ({ children, url }) => {
  return (
    <Link className={styles.btn} href={url}>
      {children}
    </Link>
  );
};
