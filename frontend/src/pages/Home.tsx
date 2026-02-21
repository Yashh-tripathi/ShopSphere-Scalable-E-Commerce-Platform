import { useEffect, useState } from "react"
import { getProducts, getProductsSearch } from "../api/product.api"
import { useProductStore } from "../store/product.store"
import ProductCard from "@/components/ProductCard"

const Home = () => {
//   const { products, setProducts } = useProductStore();
const [products, setProducts] = useState<any[]>([])
const [loading, setLoading] = useState(true)
const [search, setSearch] = useState("")

useEffect(() => {
  const delay = setTimeout(async () => {
    setLoading(true)

    try {
      const res = search.trim()
        ? await getProductsSearch(search)
        : await getProducts()

      setProducts(res || [])
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }, 500)

  return () => clearTimeout(delay)

}, [search])


  if(loading){
    return <p className="p-6">Loading products...</p>
  }

  return (
    <>
        <input
  placeholder="Search products..."
  className="border p-2 rounded mb-4 w-full"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
  {products.map((p: any) => (
    <ProductCard key={p._id} product={p} />
  ))}
</div>
    </div>
    </>
  )
}

export default Home
