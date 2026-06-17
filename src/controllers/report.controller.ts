import type { Request, Response, NextFunction } from "express";
import { reportService } from "../services/report.service.js";

export const reportController = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { entrepreneurId, ...data } = req.body;
      const report = await reportService.create(entrepreneurId, data);
      return res.status(201).json(report);
    } catch (error) { next(error); }
  },

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const reports = await reportService.findAll();
      return res.status(200).json(reports);
    } catch (error) { next(error); }
  },

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
            const { id } = req.params as unknown as { id: string };
      const report = await reportService.findById(id);
      return res.status(200).json(report);
    } catch (error) { next(error); }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
            const { id } = req.params as unknown as { id: string };
      const updated = await reportService.update(id, req.body);
      return res.status(200).json(updated);
    } catch (error) { next(error); }
  }
};