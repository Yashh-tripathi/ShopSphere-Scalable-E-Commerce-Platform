import { api } from "./axios";

export const addToCart = async (productId: string) => {
    const res = await api.post(`/cart/${productId}`);
    return res.data;
}


export const getCart = async () => {
    const res = await api.get(`/cart`);
    return res.data;
}

export const deleteCart = async (productId: string) => {
    await api.delete(`/cart/${productId}`);
}