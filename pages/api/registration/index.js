import fs from "fs";
import path from "path";

export default (req, res) => {
  try {
    if (req.method === "POST") {
      const { email } = req.body;

      if (!email || !email.includes("@")) {
        res.status(400).json({ message: "Invalid Input" });

        return;
      }

      const newRegistration = {
        email,
      };

      const filepath = path.join(process.cwd(), "db.json");
      const file = fs.readFileSync(filepath);
      const json = JSON.parse(file);
      json.registrations.push(newRegistration);
      fs.writeFileSync(filepath, JSON.stringify(json));

      res
        .status(201)
        .json({
          message: "Registration created successfully.",
          registration: newRegistration,
        });
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!" });
  }
};
