import { useEffect, useState } from "react";

import styles from "./CommentList.module.css";

import Loader from "@components/Loader/Loader";

export default ({ eventId }) => {
  const [comments, setComments] = useState();

  useEffect(() => {
    const main = async () => {
      const response = await fetch(`/api/comments/${eventId}`, {
        method: "GET",
      });
      const data = await response.json();

      setComments(data.data);
    };
    main();
  }, []);

  return (
    <>
      {comments ? (
        <>
          {0 < comments.length ? (
            <ul className={styles.comments}>
              {comments.map((comment) => (
                <li key={comment._id}>
                  <p>{comment.content}</p>
                  <div>
                    By <address>{comment.name}</address>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No comments found.</p>
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};
