import { useEffect } from "react"
import { getProducts } from "../api/product.api"
import { useProductStore } from "../store/product.store"
import ProductCard from "@/components/ProductCard"

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
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
  {products.map((p: any) => (
    <ProductCard key={p._id} product={p} />
  ))}
</div>
    </div>
  )
}

export default Home
