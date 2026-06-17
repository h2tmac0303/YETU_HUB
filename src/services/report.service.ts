import { prisma } from "../config/database.js";

export const reportService = {
  async create(entrepreneurId: string, data: any) {
    return await prisma.monthlyReport.create({
      data: {
        entrepreneurId,
        ...data,
      },
    });
  },

  async findAll() {
    return await prisma.monthlyReport.findMany({
      include: { entrepreneur: { select: { companyName: true } } },
    });
  },

  async findById(id: string) {
    return await prisma.monthlyReport.findUnique({
      where: { id },
      include: { entrepreneur: true },
    });
  },

  async update(id: string, data: any) {
    return await prisma.monthlyReport.update({
      where: { id },
      data,
    });
  }
};