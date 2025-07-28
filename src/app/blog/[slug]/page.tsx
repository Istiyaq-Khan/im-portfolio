// File: src/app/blog/[slug]/page.tsx (Dynamic Blog Page)
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface Blog {
  title: string
  content: string
  createdAt: string
  tags: string[]
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const res = await fetch(`https://your-api.com/api/blogs/${params.slug}`)
  if (!res.ok) return {}
  const blog = await res.json()
  return {
    title: blog.title,
    description: blog.content.slice(0, 160)
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const res = await fetch(`https://your-api.com/api/blogs/${params.slug}`, { cache: 'no-store' })
  if (!res.ok) return notFound()
  const blog: Blog = await res.json()

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-green-400 mb-2">{blog.title}</h1>
      <p className="text-sm text-green-500 mb-6">Published on {new Date(blog.createdAt).toLocaleDateString()}</p>

      <div className="prose prose-invert max-w-none text-green-200">
        {/* NOTE: If using markdown parsing, parse content here */}
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>

      <div className="mt-6 flex gap-2 flex-wrap">
        {blog.tags.map(tag => (
          <span
            key={tag}
            className="bg-green-700/30 text-green-200 text-xs px-2 py-1 rounded-md"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}
