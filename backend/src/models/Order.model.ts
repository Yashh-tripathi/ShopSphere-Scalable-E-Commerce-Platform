import mongoose from "mongoose";

export interface IOrderItem {
    product: mongoose.Types.ObjectId
    quantity: number
}


export interface IOrder extends mongoose.Document {
    user: mongoose.Types.ObjectId
    items: IOrderItem[]
    total: number
    status: "PLACED" | "SHIPPED" | "DELIVERED"
}


const orderSchema = new mongoose.Schema<IOrder>({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    items: [
        {
            product: {
                type: mongoose.Types.ObjectId,
                ref: "Product",
            },
            quantity: {
                type: Number
            }
        }
    ],
    total: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ["PLACED", "SHIPPED", "DELIVERED"],
        default: "PLACED"
    }
}, {
    timestamps: true,
});


export const Order = mongoose.model<IOrder>("Order", orderSchema);
