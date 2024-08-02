import { useEffect } from "react";
import styles from "./Toast.module.css";
import { useToastContext } from "../../context/ToastContext";

export default ({ title, message, status }) => {
  const { hide } = useToastContext();

  useEffect(() => {
    if (status === "error" || status === "pending" || status === "success") {
      const timeout = setTimeout(() => {
        hide();
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [status]);

  return (
    <div className={`${styles.notification} ${styles[status]}`} onClick={hide}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};
