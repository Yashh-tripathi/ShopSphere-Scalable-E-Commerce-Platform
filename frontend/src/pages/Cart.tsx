import { useEffect, useState } from "react"
import { deleteCart, getCart } from "@/api/cart.api"
import { useAuthStore } from "@/store/auth.store";
import { useCartStore } from "../store/cart.store"


const Cart = () => {

    const [cart, setCart] = useState<any>(null);
    const token = useAuthStore((s) => s.token);
    const refresh = useCartStore((s) => s.refresh);
    const triggerRefresh = useCartStore((s) => s.triggerRefresh)


    const handleDelete = async (item:any) => {
        await deleteCart(item.product._id);
        triggerRefresh();
    }


    useEffect(() => {
        if (!token) return
      
        const fetchCart = async () => {
          try {
            const data = await getCart()
            setCart(data)
          } catch {
            setCart({ items: [] })
          }
        }
      
        fetchCart()
      }, [token, refresh])
      


  if (!cart) return <p className="p-6">Loading...</p>

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.items?.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.items.map((item: any) => (
          <div
            key={item.product._id}
            className="bg-gray-200 shadow-md rounded-xl p-4 mb-4"
          >
            <h3 className="font-bold">{item.product.title}</h3>
            <p>Qty: {item.quantity}</p>
            <p className="text-indigo-500">
              ₹{item.product.price * item.quantity}
            </p>
            <button  
                onClick={() => handleDelete(item)}
                className="bg-red-500 p-1 rounded-md flex font-bold justify-end items-end cursor-pointer hover:bg-red-600 text-white/80">
                    Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;