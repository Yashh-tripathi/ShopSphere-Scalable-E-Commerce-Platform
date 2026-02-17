import mongoose from "mongoose";

export interface IProduct extends mongoose.Document{
    title: string
    description: string
    price: number
    stock: number
    category: string
    images: string[]
}

const productSchema = new mongoose.Schema<IProduct>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        default: 0,
    },
    category: {
        type: String,
        required: true,
    },
    images : [
        {
            type: String,
        }
    ],
}, {
    timestamps: true,
});

export const Product = mongoose.model<IProduct>("Product", productSchema);