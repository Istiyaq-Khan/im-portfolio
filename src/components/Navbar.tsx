'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full px-4 py-3 bg-white dark:bg-black shadow flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-green-600">Istiyaq</Link>
      <div className="hidden md:flex gap-6">
        <Link href="/projects">Projects</Link>
        <Link href="/designs">Designs</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-black p-4 flex flex-col gap-4 md:hidden">
          <Link href="/projects">Projects</Link>
          <Link href="/designs">Designs</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
}