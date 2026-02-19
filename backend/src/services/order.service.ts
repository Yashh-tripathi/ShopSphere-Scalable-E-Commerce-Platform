import mongoose from "mongoose";
import { Order } from "../models/Order.model";
import { Cart } from "../models/cart.model";
import { Product } from "../models/product.model";

export const placeOrder = async (userId: string) => {
    console.log(typeof( userId));
    const cart = await Cart.findOne({user: new mongoose.Types.ObjectId(userId)}).populate({
        path: "items.product"
      });
    if(!cart || cart.items.length === 0){
        throw new Error("Cart is empty");
    }
    let total = 0;
    const orderItems = cart.items.map((item: any) => {
        total += item.product.price * item.quantity;
        return {
            product: item.product._id,
            quantity: item.quantity
        }
    });

    const order = Order.create({
        user: userId,
        items: orderItems,
        total
    });

    cart.items = [];
    await cart.save();

    return order;

}

export const getUserOrders = async (userId: string) => {
    return Order.find({user: userId}).populate("items.product");
}

export const getAllOrders = async () => {
    return Order.find().populate("items.product user");
}

export const updateOrderStatus = async (id: string, status: string) => {
    return Order.findByIdAndUpdate(id, {status},{new: true});
}