import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import { env } from "./env.js"; // Importe o seu env validado

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const setupPrisma = () => {
  // O Zod já validou a existência e o formato da DATABASE_URL
  const pool = new Pool({ connectionString: env.DATABASE_URL });
  
  const adapter = new PrismaPg(pool);

  return new PrismaClient({ 
    adapter,
    log: env.NODE_ENV === "development" ? ["query", "error"] : ["error"],
  });
};

export const prisma = globalForPrisma.prisma || setupPrisma();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;