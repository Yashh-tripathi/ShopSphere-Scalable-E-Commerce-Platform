import { useEffect, useState } from "react"
import { getMyOrders } from "@/api/order.api"

const Orders = () => {

    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrder = async () => {
            const data = await getMyOrders();
            setOrders(data);
            setLoading(false);
        }
        fetchOrder();
    }, []);

    if(loading){
        return <p className="p-6">Loading Orders ...</p>
    }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((order: any) => (
          <div key={order._id} className="bg-gray-200 p-4 mb-4 rounded-xl">
            <p className="font-bold">Order ID: {order._id}</p>
            <p>Status: {order.status}</p>

            {order.items.map((item: any) => (
              <div key={item.product._id} className="ml-4 mt-2">
                <p>{item.product.title}</p>
                <p>Qty: {item.quantity}</p>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  )
}

export default Orders