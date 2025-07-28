// app/shop/[id]/page.tsx
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {
  params: {
    id: string
  }
}

async function getProduct(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products/${id}`, {
    cache: 'no-store',
  })
  if (!res.ok) return null
  return res.json()
}

export default async function ProductDetailPage({ params }: Props) {
  const product = await getProduct(params.id)

  if (!product) return notFound()

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.div
        className="grid md:grid-cols-2 gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={600}
          height={400}
          className="rounded-2xl object-cover"
        />

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-green-500">{product.title}</h1>
          <p className="text-gray-700 dark:text-zinc-300">{product.description}</p>
          <p className="text-2xl font-bold text-green-500">${product.price}</p>

          {/* Simple Buy Now form */}
          <form className="mt-6 space-y-4" action="/api/orders" method="POST">
            <input type="hidden" name="productId" value={product._id} />
            <input
              required
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md border dark:bg-zinc-800"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md border dark:bg-zinc-800"
            />
            <textarea
              required
              name="address"
              placeholder="Shipping Address"
              className="w-full px-4 py-2 rounded-md border dark:bg-zinc-800"
            ></textarea>

            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
            >
              Buy Now
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}
