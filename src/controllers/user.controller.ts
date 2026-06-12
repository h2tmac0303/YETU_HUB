import type { Request, Response } from "express";
import { userService } from "../services/user.service.js";

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const user = await userService.create(req.body);
      return res.status(201).json(user);
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  async findAll(req: Request, res: Response) {
    const users = await userService.findAll();
    return res.json(users);
  }

  async findById(req: Request, res: Response) {
    try {
      const id = req.params.id;

      if (!id || Array.isArray(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid ID",
        });
      }

      const user = await userService.findById(id);
      return res.json(user);
    } catch (error: any) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;

      if (!id || Array.isArray(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid ID",
        });
      }

      const user = await userService.update(id, req.body);
      return res.json(user);
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;

      if (!id || Array.isArray(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid ID",
        });
      }

      await userService.delete(id);
      return res.json({
        success: true,
        message: "User deleted",
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export const userController = new UserController();