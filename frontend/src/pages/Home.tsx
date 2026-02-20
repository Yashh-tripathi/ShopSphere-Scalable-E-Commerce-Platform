import { useEffect } from "react"
import { getProducts } from "../api/product.api"
import { useProductStore } from "../store/product.store"

const Home = () => {
  const { products, setProducts } = useProductStore()

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProducts()
      setProducts(res || [])
    }
    fetchProducts()
  }, [])

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.length > 0? products?.map((p: any) => (
        <div
          key={p._id}
          className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold">{p.title}</h2>
          <p className="text-gray-500">{p.description}</p>
          <p className="text-indigo-500 font-semibold mt-2">₹{p.price}</p>
        </div>
      )) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Home
