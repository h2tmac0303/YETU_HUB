import prisma from "../config/database.js";

export class UserService {
  // Criar utilizador
  async create(data: {
    name: string;
    email: string;
    password: string;
    role: "ENTREPRENEUR" | "INVESTOR" | "PARTNER" | "ADMIN";
  }) {
    const userExists = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (userExists) {
      throw new Error("User already exists");
    }

    const user = await prisma.user.create({
      data,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    return user;
  }

  // Listar todos os users
  async findAll() {
    return prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });
  }

  // Buscar por ID
  async findById(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        entrepreneur: true,
        investor: true,
        partner: true,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  // Atualizar user
  async update(
    id: string,
    data: {
      name?: string;
      email?: string;
      password?: string;
    }
  ) {
    const userExists = await prisma.user.findUnique({
      where: { id },
    });

    if (!userExists) {
      throw new Error("User not found");
    }

    return prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
  }

  // Deletar user
  async delete(id: string) {
    const userExists = await prisma.user.findUnique({
      where: { id },
    });

    if (!userExists) {
      throw new Error("User not found");
    }

    return prisma.user.delete({
      where: { id },
    });
  }
}

export const userService = new UserService();