import { Router } from "express"
import * as controller from "../controllers/product.controllers"
import { protect } from "../middlewares/auth.middleware"
import { adminOnly } from "../middlewares/role.middleware"

const router = Router()

// Public
router.get("/", controller.getProducts)
router.get("/:id", controller.getProductById)

// Admin
router.post("/", protect, adminOnly, controller.createProduct)
router.put("/:id", protect, adminOnly, controller.updateProduct)
router.delete("/:id", protect, adminOnly, controller.deleteProduct)

export default router
