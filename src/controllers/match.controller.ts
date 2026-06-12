import type { Request, Response } from "express";

export class MatchController {
  async generate(req: Request, res: Response) {
    return res.json({
      success: true,
      message: "Matches generated",
    });
  }

  async findAll(req: Request, res: Response) {
    return res.json({
      success: true,
      message: "List matches",
    });
  }

  async findById(req: Request, res: Response) {
    return res.json({
      success: true,
      id: req.params.id,
    });
  }
}

export const matchController =
  new MatchController();