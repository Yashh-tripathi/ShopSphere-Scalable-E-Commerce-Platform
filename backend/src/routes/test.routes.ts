import { Router } from "express";
import { protect } from "../middlewares/auth.middleware";
import { adminOnly } from "../middlewares/role.middleware";

const router = Router();

router.route("/user").get(protect, (req, res) => {
    res.json({message: "User access granted"})
});

router.route("/admin").get(protect,adminOnly, (req, res) => {
    res.json({message: "Admin access granted"})
});

export default router;