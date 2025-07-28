import React from 'react';
import '../globals.css'
import { Sidebar } from '@/components/admin/Sidebar';
import { AnimatePresence, motion } from 'framer-motion';


export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full bg-background text-foreground">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6">
        {children}
      </main>
    </div>
  );
}