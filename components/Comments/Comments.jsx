import { useState } from "react";

import styles from "./Comments.module.css";

import CommentList from "@components/CommentList/CommentList";
import NewComment from "@components/NewComment/NewComment";

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
