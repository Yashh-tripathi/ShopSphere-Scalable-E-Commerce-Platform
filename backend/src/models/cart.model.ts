import mongoose from "mongoose";


export interface ICartItem {
    product: mongoose.Types.ObjectId
    quantity: number
}

export interface ICart extends mongoose.Document{
    user: mongoose.Types.ObjectId
    items: ICartItem[]
}

const cartSchema = new mongoose.Schema<ICart>({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
    },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            },
            quantity: {
                type: Number,
                default: 1,
            }
        }
    ]
});


export const Cart = mongoose.model<ICart>("Cart", cartSchema);