import { Router } from "express";
import { partnerController } from "../controllers/partner.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware,partnerController.create);
router.get("/", partnerController.findAll);
router.get("/:id", partnerController.findById);
router.patch("/:id", partnerController.update);

router.get("/:id/benefits", partnerController.getBenefits);
router.post("/:id/benefits", authMiddleware, partnerController.createBenefit);

export default router;