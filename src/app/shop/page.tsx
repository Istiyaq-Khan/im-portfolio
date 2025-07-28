// app/shop/page.tsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Product = {
  _id: string
  title: string
  description: string
  price: number
  thumbnail: string
}

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-500 mb-8">Shop Products</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product._id}
            className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg hover:shadow-xl transition p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href={`/shop/${product._id}`}>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={500}
                height={300}
                className="rounded-xl mb-4 object-cover w-full h-56"
              />
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-gray-600 dark:text-zinc-400 text-sm mt-1 line-clamp-2">
                {product.description}
              </p>
              <p className="text-green-500 font-bold mt-3">${product.price}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
