import { Response } from "express"
import * as cartService from "../services/cart.services"
import { authRequest } from "../middlewares/auth.middleware"

export const addToCart = async (req: authRequest, res: Response) => {
  const cart = await cartService.addToCart(
    req.user._id,
    req.params.productId!.toString()
  )
  res.json(cart)
}

export const getCart = async (req: authRequest, res: Response) => {
  const cart = await cartService.getCart(req.user._id)
  res.json(cart)
}

export const removeFromCart = async (req: authRequest, res: Response) => {
  const cart = await cartService.removeFromCart(
    req.user._id,
    req.params.productId!.toString()
  )
  res.json(cart)
}
