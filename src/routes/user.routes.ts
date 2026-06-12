import { Router } from "express";
import { userController } from "../controllers/user.controller.js";

const router = Router();

router.get("/", userController.findAll);
router.get("/:id", userController.findById);
router.patch("/:id", userController.update);
router.delete("/:id", userController.delete);

export default router;