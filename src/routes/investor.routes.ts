import { Router } from "express";
import { investorController } from "../controllers/investor.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/",authMiddleware, investorController.create);
router.get("/", investorController.findAll);
router.get("/:id", investorController.findById);
router.patch("/:id", investorController.update);

export default router;