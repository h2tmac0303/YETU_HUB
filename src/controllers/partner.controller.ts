import type { Request, Response, NextFunction } from "express";
import { partnerService } from "../services/partner.service.js";

export const partnerController = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const profile = await partnerService.create(req.user.id, req.body);
      return res.status(201).json(profile);
    } catch (error) { next(error); }
  },

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const partners = await partnerService.findAll();
      return res.status(200).json(partners);
    } catch (error) { next(error); }
  },

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params as unknown as { id: string };
      const partner = await partnerService.findById(id);
      return res.status(200).json(partner);
    } catch (error) { next(error); }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params as unknown as { id: string };
      const updated = await partnerService.update(id, req.user.id, req.body);
      return res.status(200).json(updated);
    } catch (error) { next(error); }
  },

  async getBenefits(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params as unknown as { id: string };
      const benefits = await partnerService.getBenefits(id);
      return res.status(200).json(benefits);
    } catch (error) { next(error); }
  },

  async createBenefit(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params as unknown as { id: string };
      const benefit = await partnerService.createBenefit(id, req.body);
      return res.status(201).json(benefit);
    } catch (error) { next(error); }
  }
};