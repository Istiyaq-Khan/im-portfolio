// ✅ admin/orders/page.tsx
"use client";

import React from "react";

const AdminOrdersPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📦 Orders</h1>
      <p className="text-gray-500">Here you can track and manage orders.</p>
      {/* List orders, filters, delivery status etc. */}
    </div>
  );
};

export default AdminOrdersPage;
