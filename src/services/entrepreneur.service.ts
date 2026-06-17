import { prisma } from "../config/database.js";

export const entrepreneurService = {
  async create(userId: string, data: any) {
    return await prisma.entrepreneurProfile.create({
      data: {
        userId,
        ...data,
      },
    });
  },

  async findAll() {
    return await prisma.entrepreneurProfile.findMany({
      include: { user: { select: { name: true, email: true } } },
    });
  },

  async findById(id: string) {
    return await prisma.entrepreneurProfile.findUnique({
      where: { id },
      include: { user: true },
    });
  },

  async update(id: string, userId: string, data: any) {
    // Validação de dono do perfil
    const profile = await prisma.entrepreneurProfile.findUnique({ where: { id } });
    if (profile?.userId !== userId) {
      throw new Error("Você não tem permissão para editar este perfil.");
    }

    return await prisma.entrepreneurProfile.update({
      where: { id },
      data,
    });
  }
};