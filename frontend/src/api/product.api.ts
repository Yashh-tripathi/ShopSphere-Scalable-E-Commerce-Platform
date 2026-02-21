import { api } from "./axios";

export const getProducts  = async () => {
    const res = await api.get("/products");
    return res.data.products || [];
}

export const getProductsSearch = async (search = "") => {
    const res = await api.get(`/products?search=${search}`)
    return res.data.products || []
  }
  