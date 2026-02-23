import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth.store";
import { useCartStore } from "@/store/cart.store";

const Navbar = () => {
    const navigate = useNavigate();
    const logout  = useAuthStore((s) => s.logout);
    const count = useCartStore((s) => s.count);
    const token = useAuthStore((s) => s.token)


    return (
        <div className="navbar-root">
      <Link to="/home" className="logo ">
        ShopSphere
      </Link>

      <div className="links">
  {token ? (
    <>
      <Link to="/cart" className="links-items">
        Cart
        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 rounded-full shadow">
            {count}
          </span>
        )}
      </Link>

      <Link to="/orders" className="links-items">Orders</Link>
      <Link to="/admin-dashboard" className="links-items">Admins</Link>

      <button
        onClick={() => {
          logout()
          navigate("/login")
        }}
        className="btn"
      >
        Logout
      </button>
    </>
  ) : (
    <Link
      to="/register"
      className="btn"
    >
      Register
    </Link>
  )}
</div>

    </div>
    );
}

export default Navbar;