import { Request, Response } from "express";
import * as productService from "../services/product.services"

export const createProduct = async (req: Request, res: Response) => {
    try {
        const product = await productService.createProduct(req.body);
        res.status(201).json(product)
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}

export const getProducts = async (req: Request, res: Response) => {
    try {
      const data = await productService.getProducts(req.query)
      res.json(data)
    } catch (error: any) {
      res.status(400).json({ message: error.message })
    }
  }

export const getProductById = async (req: Request, res: Response) => {
    const product = await productService.getProductById(req.params.id!.toString())
    res.json(product)
}

export const updateProduct = async (req: Request, res: Response) => {
    const product = await productService.updateProduct(req.params.id!.toString(), req.body)
    res.json(product)
  }



export const deleteProduct = async (req: Request, res: Response) => {
    await productService.deleteProduct(req.params.id!.toString())
    res.json({ message: "Product deleted" })
  }