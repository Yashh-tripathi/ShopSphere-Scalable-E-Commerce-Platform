import mongoose from "mongoose"
import { Cart } from "../models/cart.model"

export const addToCart = async (userId: string, productId: any) => {
  let cart = await Cart.findOne({ user: new mongoose.Types.ObjectId(userId) })

  if (!cart) {
    cart = await Cart.create({
      user: userId,
      items: [{ product: productId, quantity: 1 }]
    })
    return cart
  }

  const item = cart.items.find(i => i.product.toString() === productId)

  if (item) {
    item.quantity += 1
  } else {
    cart.items.push({ product: productId, quantity: 1 })
  }

  await cart.save()
  return cart
}

export const getCart = async (userId: string) => {
  return Cart.findOne({ user: userId }).populate("items.product")
}

export const removeFromCart = async (userId: string, productId: string) => {
  const cart = await Cart.findOne({ user: userId })
  if (!cart) return null

  cart.items = cart.items.filter(
    item => item.product.toString() !== productId
  )

  await cart.save()
  return cart
}
