import type { Request, Response } from "express";

export class ConnectionController {
  async send(req: Request, res: Response) {
    return res.json({
      success: true,
      message: "Connection request sent",
    });
  }

  async accept(req: Request, res: Response) {
    return res.json({
      success: true,
      message: "Connection accepted",
    });
  }

  async reject(req: Request, res: Response) {
    return res.json({
      success: true,
      message: "Connection rejected",
    });
  }

  async list(req: Request, res: Response) {
    return res.json({
      success: true,
      message: "List connections",
    });
  }
    my(req: Request, res: Response) {
    return res.json({ message: "My connections" });
  }
}

export const connectionController =
  new ConnectionController();