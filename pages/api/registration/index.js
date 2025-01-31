import connect from "@configs/db";
import Registration from "@models/Registration";

export default async (req, res) => {
  try {
    if (req.method === "POST") {
      const { email } = req.body;

      if (!email || !email.includes("@")) {
        res.status(400).json({ message: "Invalid Input" });

        return;
      }

      await connect();

      const newRegistration = await Registration.create({
        email,
      });

      res.status(201).json({
        message: "Registration created successfully.",
        data: newRegistration,
      });
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
