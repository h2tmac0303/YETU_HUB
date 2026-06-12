import { Router } from "express";
import { matchController } from "../controllers/match.controller.js";

const router = Router();

router.get("/", matchController.findAll);
router.post("/generate", matchController.generate);
router.get("/:id", matchController.findById);

export default router;