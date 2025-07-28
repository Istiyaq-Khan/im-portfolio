import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/db";
import Product from "@/models/Product";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  switch (req.method) {
    case "GET":
      // List all products
      const products = await Product.find().sort({ createdAt: -1 });
      return res.status(200).json(products);

    case "POST":
      // Add product (admin only)
      const { title, description, price, thumbnail } = req.body;
      if (!title || !price) return res.status(400).json({ message: "Missing fields" });
      const newProduct = new Product({ title, description, price, thumbnail });
      await newProduct.save();
      return res.status(201).json(newProduct);

    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}
