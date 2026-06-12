import { Router } from "express";
import { entrepreneurController } from "../controllers/entrepreneur.controller.js";

const router = Router();

router.post("/", entrepreneurController.create);
router.get("/", entrepreneurController.findAll);
router.get("/:id", entrepreneurController.findById);
router.patch("/:id", entrepreneurController.update);

export default router;