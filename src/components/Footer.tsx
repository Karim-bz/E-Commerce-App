export default function Footer() {
  return (
    <footer className="mt-16 bg-dark text-white text-center py-6">
      <p className="text-sm">&copy; {new Date().getFullYear()} ShopWave. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <span className="hover:text-primary transition cursor-pointer">Facebook</span>
        <span className="hover:text-primary transition cursor-pointer">Twitter</span>
        <span className="hover:text-primary transition cursor-pointer">Instagram</span>
      </div>
    </footer>
  );
}
