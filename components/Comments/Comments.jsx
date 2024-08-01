import { useState } from "react";
import styles from "./Comments.module.css";
import CommentList from "../CommentList/CommentList";
import NewComment from "../NewComment/NewComment";

export default ({ eventId }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible((prevStatus) => !prevStatus);
  };

  return (
    <section className={styles.comments}>
      <button onClick={handleToggle}>
        {isVisible ? "Hide" : "Show"} Comments
      </button>
      {isVisible && <NewComment eventId={eventId} />}
      {isVisible && <CommentList eventId={eventId} />}
    </section>
  );
};
