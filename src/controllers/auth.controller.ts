import type { Request, Response } from "express";
import { authService } from "../services/auth.service.js";

export class AuthController {
  async register(req: Request, res: Response) {
    try {
      const user = await authService.register(req.body);

      return res.status(201).json(user);
    } catch (error: any) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const result = await authService.login(req.body);

      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(401).json({
        message: error.message,
      });
    }
  }

  async logout(req: Request, res: Response) {
  return res.status(200).json({
    success: true,
    message: "Logout successful"
  });
}
}

export const authController = new AuthController();