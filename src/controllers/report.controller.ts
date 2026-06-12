import type { Request, Response } from "express";

export class ReportController {
  async create(req: Request, res: Response) {
    return res.status(201).json({
      success: true,
      message: "Report created",
    });
  }

  async findAll(req: Request, res: Response) {
    return res.json({
      success: true,
      message: "List reports",
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
      message: "Report updated",
    });
  }
}

export const reportController =
  new ReportController();