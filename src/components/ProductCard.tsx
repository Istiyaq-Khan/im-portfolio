import { Button } from '@/components/ui/button';

export default function ProductCard({ title, image, price }: { title: string, image: string, price: number }) {
  return (
    <div className="border rounded-xl shadow-lg overflow-hidden p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
      <h3 className="mt-4 font-semibold text-lg">{title}</h3>
      <p className="text-green-600 font-bold">${price.toFixed(2)}</p>
      <Button className="mt-2 w-full">Buy Now</Button>
    </div>
  );
}