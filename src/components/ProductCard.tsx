import { Link } from "react-router-dom";
import type { Product } from "../types/product";

export default function ProductCard({ id, title, price, image }: Product) {
  return (
    <Link 
      to={`/product/${id}`} 
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300 p-4 flex flex-col items-center"
    >
      <img src={image} className="w-full h-52 object-cover rounded-md mb-4" />
      <h3 className="font-semibold text-lg text-dark mb-1">{title}</h3>
      <p className="text-primary font-bold text-xl mb-2">${price}</p>
      <button className="mt-auto w-full bg-primary text-white py-2 rounded-lg hover:bg-accent transition duration-300">
        View Details
      </button>
    </Link>
  );
}
