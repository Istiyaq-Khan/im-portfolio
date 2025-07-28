// app/contact/page.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        toast.success('Message sent!')
        setForm({ name: '', email: '', message: '' })
      } else {
        toast.error('Something went wrong')
      }
    } catch (err) {
      toast.error('Failed to send message')
    }
    setLoading(false)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold text-green-500 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Contact Me
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-2 dark:bg-zinc-800 dark:border-zinc-700"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-2 dark:bg-zinc-800 dark:border-zinc-700"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full border rounded-md px-4 py-2 dark:bg-zinc-800 dark:border-zinc-700"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </motion.form>

      <div className="mt-8 text-sm text-center text-zinc-500 dark:text-zinc-400">
        or email me directly at <a href="mailto:razinkhan3245@gmail.com" className="underline text-green-500">razinkhan3245@gmail.com</a>
      </div>
    </div>
  )
}
