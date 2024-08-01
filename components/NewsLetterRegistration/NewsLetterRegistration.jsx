import classes from "./NewsLetterRegistration.module.css";

export default () => {
  const handleRegister = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get("email");

    await fetch("/api/registration", {
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={handleRegister}>
        <div className={classes.control}>
          <input type="email" name="email" placeholder="Your Email" />
          <button type="submit">Register</button>
        </div>
      </form>
    </section>
  );
};
