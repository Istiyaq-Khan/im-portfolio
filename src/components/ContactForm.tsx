'use client';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) toast.success('Message sent!');
    else toast.error('Something went wrong');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" placeholder="Your Name" className="w-full p-2 border rounded" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Your Email" className="w-full p-2 border rounded" onChange={handleChange} required />
      <textarea name="message" placeholder="Your Message" className="w-full p-2 border rounded" rows={5} onChange={handleChange} required></textarea>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Send</button>
    </form>
  );
}