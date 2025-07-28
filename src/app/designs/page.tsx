'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type DesignItem = {
  id: string
  title: string
  date: string
  client?: string
  category: string
  imageUrl: string
}

const mockDesigns: DesignItem[] = [
  {
    id: '1',
    title: 'Free Fire Poster 1',
    date: '2024-06-20',
    client: 'Self Project',
    category: 'Poster',
    imageUrl: '/images/designs/freefire1.jpg',
  },
  {
    id: '2',
    title: 'YouTube Thumbnail - Motion Graphics',
    date: '2024-07-01',
    client: 'IM - Istiyaq Motion',
    category: 'YouTube Thumbnail',
    imageUrl: '/images/designs/thumb1.jpg',
  },
  {
    id: '3',
    title: 'Client Poster for Event',
    date: '2024-07-05',
    client: 'Raihan Studio',
    category: 'Client Work',
    imageUrl: '/images/designs/eventposter.jpg',
  },
  // Add more as you grow 💪
]

export default function MyDesignsPage() {
  return (
    <div className="space-y-10">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center text-green-400"
      >
        My Graphic Designs 🎨
      </motion.h1>

      <p className="text-center text-green-300 max-w-3xl mx-auto">
        Explore my digital art, posters, thumbnails, and graphic experiments. Each piece is a part of my creative journey as a young designer.
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {mockDesigns.map((design) => (
          <motion.div
            key={design.id}
            className="bg-[#122d18] border border-green-800 rounded-2xl overflow-hidden shadow-md hover:shadow-green-500/20 transition-all"
            whileHover={{ scale: 1.03 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Image
              src={design.imageUrl}
              alt={design.title}
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 space-y-2">
              <h2 className="text-xl font-semibold text-green-300">{design.title}</h2>
              <p className="text-sm text-green-500">{design.date}</p>
              {design.client && (
                <p className="text-sm text-green-400">
                  <span className="font-medium">Client:</span> {design.client}
                </p>
              )}
              <div className="text-xs text-green-200/70 bg-green-900 px-2 py-1 rounded inline-block mt-2">
                {design.category}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
