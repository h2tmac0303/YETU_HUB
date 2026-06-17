import type { Request, Response, NextFunction } from "express";
import { userService } from "../services/user.service.js";

export const userController = {
  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await userService.findAll();
      return res.status(200).json(users);
    } catch (error) { next(error); }
  },

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params as unknown as { id: string };

      const user = await userService.findById(id);
      if (!user) return res.status(404).json({ message: "Usuário não encontrado" });
      return res.status(200).json(user);
    } catch (error) { next(error); }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params as unknown as { id: string };

      const updated = await userService.update(id, req.body);
      return res.status(200).json(updated);
    } catch (error) { next(error); }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params as unknown as { id: string };

      await userService.delete(id);
      return res.status(204).send();
    } catch (error) { next(error); }
  }
};