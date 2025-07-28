import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/db";
// You can create an Analytics model or calculate from orders/products
// Here’s just a placeholder example:

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method !== "GET") return res.status(405).json({ message: "Method not allowed" });

  // Example: return sales stats (total sales, orders count)
  // You would normally aggregate from Order collection
  // Placeholder static data:
  const analyticsData = {
    totalSales: 5000,
    totalOrders: 120,
    topSellingProducts: [
      { productId: "abc123", title: "UI Kit", sold: 40 },
      { productId: "def456", title: "eBook", sold: 30 },
    ],
    salesOverTime: [
      { date: "2025-07-01", sales: 200 },
      { date: "2025-07-15", sales: 350 },
      { date: "2025-07-25", sales: 450 },
    ],
  };

  return res.status(200).json(analyticsData);
}
