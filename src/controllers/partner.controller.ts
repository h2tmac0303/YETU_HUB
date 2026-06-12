import type { Request, Response } from "express";

export class PartnerController {
  create(req: Request, res: Response) {
    return res.json({ message: "Partner created" });
  }

  findAll(req: Request, res: Response) {
    return res.json({ message: "List partners" });
  }

  findById(req: Request, res: Response) {
    return res.json({
      message: "Partner details",
      id: req.params.id,
    });
  }

  update(req: Request, res: Response) {
    return res.json({ message: "Partner updated" });
  }

  getBenefits(req: Request, res: Response) {
    return res.json({
      message: "Partner benefits",
      partnerId: req.params.id,
    });
  }

  createBenefit(req: Request, res: Response) {
    return res.json({
      message: "Benefit created",
      partnerId: req.params.id,
    });
  }
}

export const partnerController = new PartnerController();