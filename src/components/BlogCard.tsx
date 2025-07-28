import Link from 'next/link';

export default function BlogCard({ title, slug, date }: { title: string, slug: string, date: string }) {
  return (
    <Link href={`/blog/${slug}`} className="block border-b py-4 hover:text-green-600">
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</p>
    </Link>
  );
}