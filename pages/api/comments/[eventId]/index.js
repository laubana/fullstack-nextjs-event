import fs from "fs";
import path from "path";

export default (req, res) => {
  const { eventId } = req.query;

  try {
    if (req.method === "GET") {
      if (!eventId) {
        res.status(400).json({ message: "Invalid Input" });

        return;
      }

      const filepath = path.join(process.cwd(), "db.json");
      const file = fs.readFileSync(filepath);
      const json = JSON.parse(file);
      const comments = json.comments.filter(
        (comment) => comment.eventId === eventId
      );

      res.status(200).json({ message: "", comments });
    } else if (req.method === "POST") {
      const { content, email, name } = req.body;

      if (!content || !email || !email.includes("@") || !name) {
        res.status(400).json({ message: "Invalid Input" });

        return;
      }

      const filepath = path.join(process.cwd(), "db.json");
      const file = fs.readFileSync(filepath);
      const json = JSON.parse(file);

      const comment = {
        content,
        email,
        eventId,
        id: `c${json.comments.length + 1}`,
        name,
      };

      json.comments.push(comment);
      fs.writeFileSync(filepath, JSON.stringify(json));

      res
        .status(201)
        .json({ message: "Comment created successfully.", comment });
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!" });
  }
};
