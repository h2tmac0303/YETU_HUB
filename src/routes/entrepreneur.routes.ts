import { Router } from "express";
import { entrepreneurController } from "../controllers/entrepreneur.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware,entrepreneurController.create);
router.get("/", entrepreneurController.findAll);
router.get("/:id", entrepreneurController.findById);
router.patch("/:id", entrepreneurController.update);

export default router;