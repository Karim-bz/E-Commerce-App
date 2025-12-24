import ProductCard from "./ProductCard";
import type { Product } from "../types/product";

const products: Product[] = [
  { id: 1, title: "Nike Air Max", price: 120, image: "https://picsum.photos/300" },
  { id: 2, title: "Smart Watch", price: 90, image: "https://picsum.photos/301" },
  { id: 3, title: "Bluetooth Headphones", price: 60, image: "https://picsum.photos/302" },
  { id: 4, title: "Gaming Mouse", price: 45, image: "https://picsum.photos/303" },
];

export default function ProductList() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map(product => <ProductCard key={product.id} {...product} />)}
    </div>
  );
}
