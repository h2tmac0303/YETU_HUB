import { Router } from "express";
import { investorController } from "../controllers/investor.controller.js";

const router = Router();

router.post("/", investorController.create);
router.get("/", investorController.findAll);
router.get("/:id", investorController.findById);
router.patch("/:id", investorController.update);

export default router;