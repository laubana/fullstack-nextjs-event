import { useState } from "react";

import styles from "./NewComment.module.css";

import { useToastContext } from "@contexts/ToastContext";

export default ({ eventId }) => {
  const { show } = useToastContext();

  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    show({ message: "", status: "pending", title: "Pending..." });

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
      show({ message: "", status: "error", title: "Error!" });
      setIsError(true);
      return;
    }

    try {
      const response = await fetch(`/api/comments/${eventId}`, {
        body: JSON.stringify({ content, email, name }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (response.ok) {
        show({ message: "", status: "success", title: "Success!" });
      } else {
        show({ message: "", status: "error", title: "Error!" });
      }
    } catch (error) {
      show({ message: "", status: "error", title: "Error!" });
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      onChange={() => {
        setIsError(false);
      }}
    >
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
