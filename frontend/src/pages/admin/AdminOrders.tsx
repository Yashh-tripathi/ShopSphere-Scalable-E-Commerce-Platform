import { useEffect, useState } from "react"
import { getAllOrders, updateOrderStatus } from "@/api/order.api"

const AdminOrders = () => {

  const [orders, setOrders] = useState<any[]>([])

  const fetchOrders = async () => {
    const data = await getAllOrders()
    setOrders(data)
  }

  const handleUpdate = async (id: string) => {
    await updateOrderStatus(id, "SHIPPED")
    fetchOrders()
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Orders</h2>

      {orders.map((o) => (
        <div key={o._id} className="bg-white p-3 mb-2 rounded flex justify-between">
          <span>{o.status}</span>
          <button
            onClick={() => handleUpdate(o._id)}
            className="bg-blue-500 text-white px-2 rounded"
          >
            Ship
          </button>
        </div>
      ))}
    </div>
  )
}

export default AdminOrders
