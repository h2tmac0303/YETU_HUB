import { Router } from "express";
import { connectionController } from "../controllers/connection.controller.js";

const router = Router();

router.post("/", connectionController.send);
router.get("/my", connectionController.my);

router.patch("/:id/accept", connectionController.accept);
router.patch("/:id/reject", connectionController.reject);

export default router;