import styles from "./NewsLetterRegistration.module.css";

import { useToastContext } from "@context/ToastContext";

export default () => {
  const { hide, show } = useToastContext();

  const handleRegister = async (event) => {
    event.preventDefault();

    show({ message: "", status: "pending", title: "Pending..." });

    const formData = new FormData(event.target);

    const email = formData.get("email");

    try {
      const response = await fetch("/api/registration", {
        body: JSON.stringify({ email }),
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
    <section className={styles.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={handleRegister}>
        <div className={styles.control}>
          <input type="email" name="email" placeholder="Your Email" />
          <button type="submit">Register</button>
        </div>
      </form>
    </section>
  );
};
