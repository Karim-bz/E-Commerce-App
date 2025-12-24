import type { Product } from "../types/product";

interface Props {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: Props) => {
  return (
    <div className="border p-4 rounded shadow-sm">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full"
        onClick={() => onAddToCart?.(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
