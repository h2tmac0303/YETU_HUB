import {prisma} from "../config/database.js";

class EntrepreneurService {
  async create(data: any) {
    return prisma.entrepreneurProfile.create({
      data,
    });
  }
}

export const entrepreneurService =
  new EntrepreneurService();