import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/db";
import Message from "@/models/Message";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === "POST") {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ message: "All fields required" });

    const newMsg = new Message({ name, email, message });
    await newMsg.save();

    return res.status(201).json({ message: "Message sent" });
  }

  if (req.method === "GET") {
    // Admin: get all messages
    const messages = await Message.find().sort({ createdAt: -1 });
    return res.status(200).json(messages);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
