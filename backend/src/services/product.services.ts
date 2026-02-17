import { Product } from "../models/product.model";

export const createProduct = async (data: any) => {
    return Product.create(data);
}

export const getProducts = async (query: any) => {
    const page = Number(query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const keyword = query.search ? { title : {$regex: query.search, $options: "i"}} : {}

    const products = await Product.find({...keyword})
    .limit(limit)
    .skip(skip);

    const total = await Product.countDocuments({...keyword});

    return {products, total};

}

export const getProductById = async (id: string) => {
    return Product.findById(id)
}

export const updateProduct = async (id: string, data: any) => {
    return Product.findByIdAndUpdate(id, data, { new: true })
}

export const deleteProduct = async (id: string) => {
    return Product.findByIdAndDelete(id)
}