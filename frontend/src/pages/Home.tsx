import { useEffect, useState } from "react"
import { getProducts, getProductsSearch } from "../api/product.api"
// import { useProductStore } from "../store/product.store"
import ProductCard from "@/components/ProductCard"
import { HoverEffect } from "@/components/ui/card-hover-effect"

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
        <div className="flex w-full justify-center mt-5 ">
        <input
  placeholder="Search products..."
  className="border-2 shadow-xl p-4  rounded-2xl  mb-4 w-125 justify-center border-black"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
        </div>
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <HoverEffect
  items={products.map((p: any) => ({
    title: p.title,
    description: p.description,
    link: "#",
    content: <ProductCard product={p} />
  }))}
  className="w-300"
/>

</div>
    </div>
    </>
  )
}

export default Home
