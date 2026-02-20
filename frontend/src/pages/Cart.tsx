import { useEffect, useState } from "react"
import { getCart } from "@/api/cart.api"

const Cart = () => {

    const [cart, setCart] = useState<any>(null);
    
    useEffect(() => {
        const fetchCart = async () => {
            const data = await getCart();
            setCart(data);
        }
        fetchCart();
    }, [])


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
            className="bg-white shadow-md rounded-xl p-4 mb-4"
          >
            <h3 className="font-bold">{item.product.title}</h3>
            <p>Qty: {item.quantity}</p>
            <p className="text-indigo-500">
              ₹{item.product.price * item.quantity}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;