import { prisma } from "../config/database.js";

export const partnerService = {
  async create(userId: string, data: any) {
    return await prisma.partnerProfile.create({
      data: { userId, ...data }
    });
  },

  async findAll() {
    return await prisma.partnerProfile.findMany({
      include: { benefits: true }
    });
  },

  async findById(id: string) {
    return await prisma.partnerProfile.findUnique({
      where: { id },
      include: { benefits: true }
    });
  },

  async update(id: string, userId: string, data: any) {
    const profile = await prisma.partnerProfile.findUnique({ where: { id } });
    if (profile?.userId !== userId) throw new Error("Acesso negado.");
    
    return await prisma.partnerProfile.update({ where: { id }, data });
  },

  // Lógica para benefícios
  async getBenefits(partnerId: string) {
    return await prisma.benefit.findMany({ where: { partnerId } });
  },

  async createBenefit(partnerId: string, data: any) {
    return await prisma.benefit.create({
      data: { partnerId, ...data }
    });
  }
};