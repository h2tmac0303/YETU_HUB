import { prisma } from "../config/database.js";

export const userService = {
  async findAll() {
    return await prisma.user.findMany({
      select: { id: true, name: true, email: true, role: true }
    });
  },

  async findById(id: string) {
    return await prisma.user.findUnique({
      where: { id },
      include: { 
        entrepreneur: true, 
        investor: true, 
        partner: true 
      }
    });
  },

  async update(id: string, data: any) {
    return await prisma.user.update({
      where: { id },
      data,
    });
  },

  async delete(id: string) {
    return await prisma.user.delete({
      where: { id }
    });
  }
};