import type { Request, Response, NextFunction } from "express";
import { authService } from "../services/auth.service.js";

export const AuthController = {
  // =========================
  // REGISTER CONTROLLER
  // =========================
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password, role } = req.body;

      // Validação básica
      if (!name || !email || !password || !role) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios." });
      }

      const user = await authService.register({ name, email, password, role });
      
      return res.status(201).json({
        message: "Usuário registrado com sucesso.",
        user
      });
    } catch (error: any) {
      if (error.message === "User already exists") {
        return res.status(409).json({ message: error.message });
      }
      next(error);
    }
  },

  // =========================
  // LOGIN CONTROLLER
  // =========================
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: "Email e senha são obrigatórios." });
      }

      const result = await authService.login({ email, password });

      return res.status(200).json({
        message: "Login realizado com sucesso.",
        ...result
      });
    } catch (error: any) {
      if (error.message === "Invalid credentials") {
        return res.status(401).json({ message: error.message });
      }
      next(error);
    }
  },

  // =========================
  // LOGOUT
  // =========================
  async logout(req: Request, res: Response) {
    // Se você estiver usando cookies HTTP-only para o JWT:
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(200).json({ 
      message: "Logout realizado com sucesso." 
    });
  }
};