import { useEffect, useState } from "react";
import styles from "./CommentList.module.css";

export default ({ eventId }) => {
  const [comments, setComments] = useState();

  useEffect(() => {
    const main = async () => {
      const response = await fetch(`/api/comments/${eventId}`, {
        method: "GET",
      });
      const data = await response.json();

      setComments(data.comments);
    };
    main();
  }, []);

  return (
    <>
      {comments && (
        <ul className={styles.comments}>
          {comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.content}</p>
              <div>
                By <address>{comment.name}</address>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
