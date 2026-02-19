import { Router } from "express";
import * as controller from "../controllers/order.controller";
import { protect } from "../middlewares/auth.middleware";
import { adminOnly } from "../middlewares/role.middleware";

const router = Router();


router.route("/place").post(protect, controller.placeOrder);
router.route("/my").get(protect, controller.getMyOrders);


//admin only 
router.route("/all").get(protect, adminOnly, controller.getALlOrders);
router.route("/update/:id").put(protect, adminOnly, controller.updateOrderStatus);


export default router;