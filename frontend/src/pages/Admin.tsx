import { deleteProduct, getProducts } from "@/api/product.api";
import { useEffect, useState } from "react"


const Admin = () => {
    const [products, setProducts] = useState<any[]>([]);

    const fetchProduct = async () => {
        const data = await getProducts();
        setProducts(data);
    }

    const handleDelete = async (pId: string) => {
        await deleteProduct(pId);
        fetchProduct();
    }

    useEffect(() => {
        fetchProduct();
    },[])


    return (
        <div className="flex ">
        <div className="p-15 flex flex-col w-1/2">
            <h2 className="text-3xl font-bold mb-20 ">
                Admin Dashboard
            </h2>
            {products.map((p) => (
                <div className="border-2 border-black p-2 rounded-lg w-150 font-semibold flex justify-between bg-black">
                    <span className="text-white ">{p.title}</span>
                    <button 
                        onClick={() => handleDelete(p._id)}
                        className="border border-black px-4 py-0.5 rounded-md cursor-pointer bg-red-500"
                    >
                        DELETE
                    </button>
                </div>
            ))}
        </div>
        <div className="">
        create product 

        </div>
        </div>
    );





}

export default Admin