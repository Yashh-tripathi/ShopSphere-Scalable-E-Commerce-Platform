import { Outlet } from "react-router-dom"

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-black text-white p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

        <ul className="space-y-3">
          <li><a href="/admin">Dashboard</a></li>
          <li><a href="/admin/products">Products</a></li>
          <li><a href="/admin/orders">Orders</a></li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>

    </div>
  )
}

export default AdminLayout
