import { useState } from "react";
import styles from "./NewComment.module.css";

export default ({ eventId }) => {
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const content = formData.get("content");
    const email = formData.get("email");
    const name = formData.get("name");

    if (
      !content ||
      content.trim() === "" ||
      !email ||
      email.trim() === "" ||
      !email.includes("@") ||
      !name ||
      name.trim() === ""
    ) {
      setIsError(true);
      return;
    }

    await fetch(`/api/comments/${eventId}`, {
      body: JSON.stringify({ content, email, name }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" />
        </div>
        <div className={styles.control}>
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" />
        </div>
      </div>
      <div className={styles.control}>
        <label htmlFor="content">Your Comment</label>
        <textarea name="content" rows="5"></textarea>
      </div>
      {isError && <p>Invalid Input</p>}
      <button type="submit">Submit</button>
    </form>
  );
};
