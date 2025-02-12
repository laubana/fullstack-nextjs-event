import dbConfig from "@configs/dbConfig";
import Comment from "@models/Comment";

export default async (req, res) => {
  const { eventId } = req.query;

  try {
    if (req.method === "GET") {
      if (!eventId) {
        res.status(400).json({ message: "Invalid Input" });

        return;
      }

      await dbConfig.connect();

      const existingComments = await Comment.find({ event: eventId }).lean();

      res.status(200).json({ message: "", data: existingComments });
    } else if (req.method === "POST") {
      const { email, name, content } = req.body;

      if (!email || !email.includes("@") || !name || !content) {
        res.status(400).json({ message: "Invalid Input" });

        return;
      }

      await dbConfig.connect();

      const newComment = await Comment.create({
        email,
        name,
        content,
        event: eventId,
      });

      res
        .status(201)
        .json({ message: "Comment created successfully.", data: newComment });
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
