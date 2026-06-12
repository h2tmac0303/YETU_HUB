import { Router } from "express";

import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import entrepreneurRoutes from "./entrepreneur.routes.js";
import investorRoutes from "./investor.routes.js";
import partnerRoutes from "./partner.routes.js";
import matchRoutes from "./match.routes.js";
import connectionRoutes from "./connection.routes.js";
import reportRoutes from "./report.routes.js";

const router = Router();

router.get("/", (_, res) => {
  res.status(200).json({
    success: true,
    name: "YETU HUB API",
    version: "1.0.0",
  });
});

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/entrepreneurs", entrepreneurRoutes);
router.use("/investors", investorRoutes);
router.use("/partners", partnerRoutes);
router.use("/matches", matchRoutes);
router.use("/connections", connectionRoutes);
router.use("/reports", reportRoutes);

export default router;