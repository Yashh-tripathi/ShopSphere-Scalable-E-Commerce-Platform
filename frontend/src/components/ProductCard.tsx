import { addToCart } from "@/api/cart.api";
import { useAuthStore } from "@/store/auth.store";
import { useCartStore } from "@/store/cart.store";
import toast from "react-hot-toast"


interface Product {
    _id: string
    title: string
    description: string
    price: number 
    category: string
}

const ProductCard = ({product} : {product: Product}) => {
    const { triggerRefresh } = useCartStore();

    const token = useAuthStore((s) => s.token)

    const handleAddToCart = async () => {
      if (!token) {
        toast.error("Please login first")
        return
      }
    
      try {
        console.log(product._id)
        await addToCart(product._id)
        triggerRefresh() 
        toast.success("Added to cart")
      } catch {
        toast.error("Already in cart")
      }
    }
    


    return (
        <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
      <h2 className="text-xl font-bold">{product.title}</h2>
      <p className="text-gray-500">{product.description}</p>
      <p className="text-indigo-500 font-semibold mt-2">₹{product.price}</p>

      <button
        onClick={handleAddToCart}
        className="mt-3 w-full bg-indigo-500 text-white py-1 rounded hover:bg-indigo-600"
      >
        Add to Cart
      </button>
    </div>
    );
}

export default ProductCard