import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth.store";
import { useCartStore } from "@/store/cart.store";

const Navbar = () => {
    const navigate = useNavigate();
    const logout  = useAuthStore((s) => s.logout);
    const count = useCartStore((s) => s.count);
    const token = useAuthStore((s) => s.token)


    return (
        <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-indigo-600">
        ShopSphere
      </Link>

      <div className="flex gap-4 items-center">
  {token ? (
    <>
      <Link to="/cart" className="relative inline-flex items-center">
        Cart
        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 rounded-full shadow">
            {count}
          </span>
        )}
      </Link>

      <Link to="/orders">Orders</Link>

      <button
        onClick={() => {
          logout()
          navigate("/login")
        }}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Logout
      </button>
    </>
  ) : (
    <Link
      to="/register"
      className="bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600"
    >
      Register
    </Link>
  )}
</div>

    </div>
    );
}

export default Navbar;