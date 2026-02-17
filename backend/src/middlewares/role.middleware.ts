import { Response, NextFunction } from "express";
import { authRequest } from "./auth.middleware";

export const adminOnly = (req: authRequest, res: Response, next: NextFunction) => {
    if(req.user.role !== "ADMIN"){
        return res.status(403).json({message: "Admin access only."});
    }
    next();
}