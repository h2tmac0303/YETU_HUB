import type { Request, Response } from "express";

export class EntrepreneurController {
  async create(req: Request, res: Response) {
    return res.status(201).json({
      success: true,
      message: "Entrepreneur created",
    });
  }

  async findAll(req: Request, res: Response) {
    return res.json({
      success: true,
      message: "List entrepreneurs",
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
      message: "Entrepreneur updated",
    });
  }
}

export const entrepreneurController =
  new EntrepreneurController();