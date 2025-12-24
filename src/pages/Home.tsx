import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div>
      <section className="text-center mt-10 py-20 bg-linear-to-r from-primary to-secondary text-white rounded-b-3xl">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to <span className="text-accent">ShopWave</span>
        </h1>
        <p className="text-lg mb-6">
          Discover amazing products with great deals every day.
        </p>
        <>
          <button className="bg-white text-primary font-bold px-8 py-3 rounded-full shadow-lg hover:bg-light hover:text-primary transition">
            Shop Now
          </button>
        </>
      </section>
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-dark mb-6">Featured Products</h2>
        <ProductList />
      </section>
    </div>
  );
}
