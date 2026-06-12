import type { Request, Response } from "express";

export class InvestorController {
  async create(req: Request, res: Response) {
    return res.status(201).json({
      success: true,
      message: "Investor created",
    });
  }

  async findAll(req: Request, res: Response) {
    return res.json({
      success: true,
      message: "List investors",
    });
  }

  async findById(req: Request, res: Response) {
    return res.json({
      success: true,
      id: req.params.id,
    });
  }

  async update(req: Request, res: Response) {
    return res.json({
      success: true,
      message: "Investor updated",
    });
  }
}

export const investorController =
  new InvestorController();