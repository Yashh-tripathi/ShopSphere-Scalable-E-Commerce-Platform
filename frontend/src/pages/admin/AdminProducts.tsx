import { useEffect, useState } from "react"
import { getProducts, deleteProduct } from "@/api/product.api"

const AdminProducts = () => {

  const [products, setProducts] = useState<any[]>([])

  const fetchProducts = async () => {
    const data = await getProducts()
    setProducts(data)
  }

  const handleDelete = async (id: string) => {
    await deleteProduct(id)
    fetchProducts()
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Products</h2>

      {products.map((p) => (
        <div key={p._id} className="bg-white p-3 mb-2 rounded flex justify-between">
          <span>{p.title}</span>
          <button
            onClick={() => handleDelete(p._id)}
            className="bg-red-500 text-white px-2 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default AdminProducts
