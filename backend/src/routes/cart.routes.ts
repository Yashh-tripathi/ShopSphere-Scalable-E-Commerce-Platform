import { Router } from "express"
import { protect } from "../middlewares/auth.middleware"
import * as controller from "../controllers/cart.controller"

const router = Router()

router.post("/:productId", protect, controller.addToCart)
router.get("/", protect, controller.getCart)
router.delete("/:productId", protect, controller.removeFromCart)

export default router
