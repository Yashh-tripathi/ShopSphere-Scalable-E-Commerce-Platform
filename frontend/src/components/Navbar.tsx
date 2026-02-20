import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth.store";

const Navbar = () => {
    const navigate = useNavigate();
    const logout  = useAuthStore((s) => s.logout);
    return (
        <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-indigo-600">
        ShopSphere
      </Link>

      <div className="flex gap-4 items-center">
        <Link to="/cart" className="hover:text-indigo-600">
          Cart
        </Link>

        <button
          onClick={() => {
            logout()
            navigate("/login")
          }}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </div>
    );
}

export default Navbar;