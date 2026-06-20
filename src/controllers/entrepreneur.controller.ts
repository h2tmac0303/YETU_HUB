import type { Request, Response, NextFunction } from "express";
import { entrepreneurService } from "../services/entrepreneur.service.js";

export const entrepreneurController = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).user.id;
      const profile = await entrepreneurService.create(userId, req.body);
      return res.status(201).json(profile);
    } catch (error) {
      next(error);
    }
  },

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const profiles = await entrepreneurService.findAll();
      return res.status(200).json(profiles);
    } catch (error) {
      next(error);
    }
  },

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).user.id;
      
      // Validação necessária para satisfazer o TypeScript
      if (!userId) {
        return res.status(400).json({ message: "ID do perfil não fornecido" });
      }
      const profile = await entrepreneurService.findById(userId);
      if (!profile) return res.status(404).json({ message: "Perfil não encontrado" });
      return res.status(200).json(profile);
    } catch (error) {
      next(error);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
       const { id } = req.params as unknown as { id: string };
      
      
      if (!id) {
        return res.status(400).json({ message: "ID do perfil não fornecido" });
      }
      const userId = (req as any).user.id;
      const updatedProfile = await entrepreneurService.update(id, userId, req.body);
      return res.status(200).json(updatedProfile);
    } catch (error) {
      next(error);
    }
  }
};