import { Router } from "express";
import { partnerController } from "../controllers/partner.controller.js";

const router = Router();

router.post("/", partnerController.create);
router.get("/", partnerController.findAll);
router.get("/:id", partnerController.findById);
router.patch("/:id", partnerController.update);

router.get("/:id/benefits", partnerController.getBenefits);
router.post("/:id/benefits", partnerController.createBenefit);

export default router;