import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-3xl font-bold text-primary">
          ShopWave
        </Link>

        <ul className="flex gap-8 text-gray-700 font-medium uppercase tracking-wide">
          <Link to="/" className="hover:text-primary transition">Home</Link>
          <Link to="/products" className="hover:text-primary transition">Products</Link>
          <Link to="/cart" className="hover:text-primary transition">Cart</Link>
          <Link to="/login" className="hover:text-primary transition">Login</Link>
        </ul>
      </div>
    </nav>
  );
}
