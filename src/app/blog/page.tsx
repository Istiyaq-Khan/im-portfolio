// File: src/app/blog/page.tsx (Blog Listing Page)
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Blog {
  _id: string
  title: string
  slug: string
  description: string
  tags: string[]
  createdAt: string
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch('/api/blogs')
      const data = await res.json()
      setBlogs(data)
    }
    fetchBlogs()
  }, [])

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-green-400 mb-6"
      >
        Blog 📝
      </motion.h1>

      <div className="grid gap-6">
        {blogs.map(blog => (
          <Link href={`/blog/${blog.slug}`} key={blog._id}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#122d18] border border-green-800 p-5 rounded-xl cursor-pointer hover:shadow-md transition-all"
            >
              <h2 className="text-2xl text-green-200 font-semibold">{blog.title}</h2>
              <p className="text-green-300 mt-1 line-clamp-2">{blog.description}</p>
              <div className="flex gap-2 mt-2 flex-wrap">
                {blog.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-green-700/30 text-green-200 text-xs px-2 py-1 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <p className="text-xs text-green-400 mt-2">{new Date(blog.createdAt).toLocaleDateString()}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
}


