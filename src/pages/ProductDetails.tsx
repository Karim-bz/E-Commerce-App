import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 my-10 bg-white p-8 rounded-2xl shadow-lg">
      <img src={`https://picsum.photos/400?random=${id}`} className="rounded-xl object-cover w-full" />

      <div className="flex flex-col justify-between">
        <h2 className="text-4xl font-bold text-dark mb-4">Product #{id}</h2>
        <p className="text-gray-600 mb-4">High-quality product. Modern design. Perfect for your daily needs.</p>
        <p className="text-2xl font-bold text-primary mb-6">$89.99</p>
        <button className="bg-primary text-white py-3 rounded-xl font-semibold hover:bg-accent transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
