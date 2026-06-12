import prisma from "../config/database.js";

interface CreateInvestorDTO {
  userId: string;
  ticketMin: number;
  ticketMax: number;
  sectors: string[];
  preferredStage?: "IDEA" | "MVP" | "TRACTION" | "SCALE";
}

interface UpdateInvestorDTO {
  ticketMin?: number;
  ticketMax?: number;
  sectors?: string[];
  preferredStage?: "IDEA" | "MVP" | "TRACTION" | "SCALE";
}

class InvestorService {
  // 🧠 Criar perfil de investidor
  async create(data: CreateInvestorDTO) {
    return prisma.investorProfile.create({
      data: {
        userId: data.userId,
        ticketMin: data.ticketMin,
        ticketMax: data.ticketMax,
        sectors: data.sectors,
        preferredStage: data.preferredStage,
      },
    });
  }

  // 📊 Listar todos investidores
  async findAll() {
    return prisma.investorProfile.findMany({
      include: {
        user: true,
      },
    });
  }

  // 🔍 Buscar por ID
  async findById(id: string) {
    return prisma.investorProfile.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  // ✏️ Atualizar perfil
  async update(id: string, data: UpdateInvestorDTO) {
    return prisma.investorProfile.update({
      where: { id },
      data,
    });
  }

  // ❌ Remover investidor
  async delete(id: string) {
    return prisma.investorProfile.delete({
      where: { id },
    });
  }

  // 🧠 Buscar investidores compatíveis (base para MATCH ENGINE)
  async findByCriteria(criteria: {
    sector?: string;
    ticket?: number;
    stage?: string;
  }) {
    return prisma.investorProfile.findMany({
      where: {
        AND: [
          criteria.sector
            ? { sectors: { has: criteria.sector } }
            : {},
          criteria.ticket
            ? {
                ticketMin: { lte: criteria.ticket },
                ticketMax: { gte: criteria.ticket },
              }
            : {},
          criteria.stage
            ? { preferredStage: criteria.stage as any }
            : {},
        ],
      },
      include: {
        user: true,
      },
    });
  }
}

export const investorService = new InvestorService();