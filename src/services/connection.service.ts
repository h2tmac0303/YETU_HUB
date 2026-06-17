import { prisma } from "../config/database.js";

export const connectionService = {
  async createRequest(data: { senderId: string; receiverId: string; message?: string }) {
    // Evita auto-conexão
    if (data.senderId === data.receiverId) {
      throw new Error("Você não pode se conectar consigo mesmo.");
    }

    return await prisma.connection.create({
      data: {
        senderId: data.senderId,
        receiverId: data.receiverId,
        message: data.message ?? null,
        status: "PENDING",
      },
    });
  },

  async findByUser(userId: string) {
    return await prisma.connection.findMany({
      where: {
        OR: [{ senderId: userId }, { receiverId: userId }],
      },
      include: {
        sender: { select: { id: true, name: true, role: true } },
        receiver: { select: { id: true, name: true, role: true } },
      },
    });
  },

  async updateStatus(connectionId: string, userId: string, status: "ACCEPTED" | "REJECTED") {
    const connection = await prisma.connection.findUnique({
      where: { id: connectionId },
    });

    if (!connection) throw new Error("Conexão não encontrada.");
    
    // Validação de permissão: apenas o receiver pode alterar o status
    if (connection.receiverId !== userId) {
      throw new Error("Você não tem permissão para esta ação.");
    }

    return await prisma.connection.update({
      where: { id: connectionId },
      data: { status },
    });
  }
};