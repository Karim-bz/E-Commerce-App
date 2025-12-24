import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 shadow-md bg-white">
      <h1 className="text-xl font-bold">MyStore</h1>

      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
