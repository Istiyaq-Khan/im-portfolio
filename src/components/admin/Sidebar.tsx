// src/components/admin/Sidebar.tsx
"use client";
import React from "react";

export const Sidebar = () => {
  return (
    <aside className="w-64 h-full bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Admin Sidebar</h2>
      <ul className="space-y-2">
        <li><a href="/admin" className="hover:underline">Dashboard</a></li>
        <li><a href="/admin/products" className="hover:underline">Products</a></li>
        <li><a href="/admin/orders" className="hover:underline">Orders</a></li>
        <li><a href="/admin/blogs" className="hover:underline">Blogs</a></li>
        <li><a href="/admin/messages" className="hover:underline">Messages</a></li>
      </ul>
    </aside>
  );
};
