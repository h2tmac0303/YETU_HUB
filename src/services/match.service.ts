import { prisma } from "../config/database.js";

export const matchService = {
  async generate(entrepreneurId: string, investorId: string) {
    // 1. Verifica se já existe um match
    const existingMatch = await prisma.match.findFirst({
      where: { entrepreneurId, investorId }
    });
    
    if (existingMatch) return existingMatch;

    // 2. Cria o novo registro de match
    return await prisma.match.create({
      data: {
        entrepreneurId,
        investorId,
        compatibility: 0,
        status: "PENDING",
      }
    });
  },

  async findAll() {
    return await prisma.match.findMany({
      include: {
        entrepreneur: { include: { user: { select: { name: true } } } },
        investor: { include: { user: { select: { name: true } } } }
      }
    });
  },

  async findById(id: string) {
    return await prisma.match.findUnique({
      where: { id },
      include: { entrepreneur: true, investor: true }
    });
  }
};