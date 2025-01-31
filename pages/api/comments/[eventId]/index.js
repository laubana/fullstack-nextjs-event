import connect from "@configs/db";
import Comment from "@models/Comment";

export default async (req, res) => {
  const { eventId } = req.query;

  try {
    if (req.method === "GET") {
      if (!eventId) {
        res.status(400).json({ message: "Invalid Input" });

        return;
      }

      await connect();

      const existingComments = await Comment.find({ event: eventId }).lean();

      res.status(200).json({ message: "", data: existingComments });
    } else if (req.method === "POST") {
      const { content, email, name } = req.body;

      if (!content || !email || !email.includes("@") || !name) {
        res.status(400).json({ message: "Invalid Input" });

        return;
      }

      await connect();

      const newComment = await Comment.create({
        content,
        email,
        name,
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
