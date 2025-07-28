import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  switch (req.method) {
    case "GET":
      // List all blogs, optionally filtered by tags or pagination
      const blogs = await Blog.find().sort({ createdAt: -1 });
      return res.status(200).json(blogs);

    case "POST":
      // Create blog post (admin only - auth check needed)
      const { title, content, tags } = req.body;
      if (!title || !content) return res.status(400).json({ message: "Missing fields" });
      const newBlog = new Blog({ title, content, tags });
      await newBlog.save();
      return res.status(201).json(newBlog);

    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}
