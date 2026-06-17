import type { Request, Response, NextFunction } from "express";
import { matchService } from "../services/match.service.js";

export const matchController = {
  async generate(req: Request, res: Response, next: NextFunction) {
    try {
      const { entrepreneurId, investorId } = req.body;
      const match = await matchService.generate(entrepreneurId, investorId);
      return res.status(201).json(match);
    } catch (error) {
      next(error);
    }
  },

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const matches = await matchService.findAll();
      return res.status(200).json(matches);
    } catch (error) {
      next(error);
    }
  },

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params as unknown as { id: string };
      const match = await matchService.findById(id);
      if (!match) return res.status(404).json({ message: "Match não encontrado" });
      return res.status(200).json(match);
    } catch (error) {
      next(error);
    }
  }
};