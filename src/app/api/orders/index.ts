import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/db";
import Order from "@/models/Order";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  switch (req.method) {
    case "POST":
      // New order placement
      const { name, email, productId, address } = req.body;
      if (!name || !email || !productId || !address)
        return res.status(400).json({ message: "Missing order details" });

      const newOrder = new Order({ name, email, product: productId, address });
      await newOrder.save();

      return res.status(201).json({ message: "Order placed" });

    case "GET":
      // Admin: list all orders
      const orders = await Order.find().populate("product").sort({ createdAt: -1 });
      return res.status(200).json(orders);

    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}
