import { useEffect, useState } from "react"
import { getProducts, getProductsSearch } from "../api/product.api"
import ProductCard from "@/components/ProductCard"
import { HoverEffect } from "@/components/ui/card-hover-effect"

const Home = () => {

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

  if (loading) {
    return <p className="p-6">Loading products...</p>
  }

  return (
    <>
      <div className="flex w-full justify-center mt-5">
        <input
          placeholder="Search products..."
          className="border-2 shadow-xl p-4 rounded-2xl mb-4 w-125 border-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="p-6">
        <HoverEffect
          items={products.map((p: any) => ({
            title: p.title,
            description: p.description,
            link: p._id, // used only as key
            content: <ProductCard product={p} />
          }))}
        />
      </div>
    </>
  )
}

export default Home
