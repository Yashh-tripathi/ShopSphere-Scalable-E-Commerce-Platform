import { Response } from "express";
import * as orderService from "../services/order.service"
import { authRequest } from "../middlewares/auth.middleware";


export const placeOrder = async (req: authRequest, res: Response) => {
    const order = await orderService.placeOrder(req.user!._id.toString());
    res.status(201).json(order);
}

export const getMyOrders = async (req: authRequest, res: Response) => {
    const orders = await orderService.getUserOrders(req.user!._id.toString());
    res.status(200).json(orders);
}

export const getALlOrders = async (_req: authRequest, res: Response) => {
    const orders = await orderService.getAllOrders();
    res.status(200).json(orders);
}

export const updateOrderStatus = async (req: authRequest, res: Response) => {
    const order = await orderService.updateOrderStatus(
        req.params.id!.toString(),
        req.body.status
    );
    res.status(200).json(order);
}

