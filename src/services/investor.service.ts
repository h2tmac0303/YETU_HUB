import { prisma } from "../config/database.js";

export const investorService = {
  async create(userId: string, data: any) {
    return await prisma.investorProfile.create({
      data: {
        userId,
        ...data,
      },
    });
  },

  async findAll() {
    return await prisma.investorProfile.findMany({
      include: { user: { select: { name: true, email: true } } },
    });
  },

  async findById(id: string) {
    return await prisma.investorProfile.findUnique({
      where: { id },
      include: { user: true },
    });
  },

  async update(id: string, userId: string, data: any) {
    const profile = await prisma.investorProfile.findUnique({ where: { id } });
    if (profile?.userId !== userId) {
      throw new Error("Você não tem permissão para editar este perfil.");
    }

    return await prisma.investorProfile.update({
      where: { id },
      data,
    });
  }
};