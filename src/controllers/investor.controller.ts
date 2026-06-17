import type { Request, Response, NextFunction } from "express";
import { investorService } from "../services/investor.service.js";

export const investorController = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user.id; // Agora tipado corretamente
      const profile = await investorService.create(userId, req.body);
      return res.status(201).json(profile);
    } catch (error) {
      next(error);
    }
  },

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const profiles = await investorService.findAll();
      return res.status(200).json(profiles);
    } catch (error) {
      next(error);
    }
  },

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const profile = await investorService.findById(id as string);
      if (!profile) return res.status(404).json({ message: "Perfil não encontrado" });
      return res.status(200).json(profile);
    } catch (error) {
      next(error);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const userId = req.user.id;
      const updatedProfile = await investorService.update(id as string, userId, req.body);
      return res.status(200).json(updatedProfile);
    } catch (error) {
      next(error);
    }
  }
};