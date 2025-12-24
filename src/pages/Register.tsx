export default function Register() {
  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-dark text-center mb-6">Register</h2>
      <input className="w-full p-3 mb-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Name"/>
      <input className="w-full p-3 mb-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Email"/>
      <input type="password" className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Password"/>
      <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-accent transition">Register</button>
    </div>
  );
}
