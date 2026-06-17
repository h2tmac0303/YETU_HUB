import type { Request, Response, NextFunction } from "express";
import { connectionService } from "../services/connection.service.js";

export const connectionController = {
  async send(req: Request, res: Response, next: NextFunction) {
    try {
      const senderId = (req as any).user.id;
      const { receiverId, message } = req.body;
      const connection = await connectionService.createRequest({ senderId, receiverId, message });
      return res.status(201).json(connection);
    } catch (error) {
      next(error);
    }
  },

  async my(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).user.id;
      const connections = await connectionService.findByUser(userId);
      return res.status(200).json(connections);
    } catch (error) {
      next(error);
    }
  },

  async accept(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params as unknown as { id: string };


      if (!id) {
        return res.status(400).json({ message: "ID do perfil não fornecido" });
      }
      const userId = req.user.id;
      const connection = await connectionService.updateStatus(id, userId, "ACCEPTED");
      return res.status(200).json(connection);
    } catch (error) {
      next(error);
    }
  },

  async reject(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params as unknown as { id: string };


      if (!id) {
        return res.status(400).json({ message: "ID do perfil não fornecido" });
      }
      const userId = req.user.id;
      const connection = await connectionService.updateStatus(id, userId, "REJECTED");
      return res.status(200).json(connection);
    } catch (error) {
      next(error);
    }
  }
};