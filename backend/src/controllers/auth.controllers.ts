import { Request, Response } from "express";
import * as authServices from "../services/auth.services";

export const register = async (req: Request, res: Response) => {
    try {
        const {name, email, password} = req.body;
        const data = await authServices.registerUser(name, email, password);
        res.status(201).json(data);
    } catch (error: any) {
        res.status(400).json({messgae: error.message })
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;
        const data = await authServices.loginUser(email, password);
        res.status(200).json(data);
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}