import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const Home = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default Home;
