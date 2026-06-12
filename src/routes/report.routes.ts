import { Router } from "express";
import { reportController } from "../controllers/report.controller.js";

const router = Router();

router.get("/", reportController.findAll);
router.get("/:id", reportController.findById);
router.post("/", reportController.create);
router.patch("/:id", reportController.update);

export default router;