import app from "./app.js";
import { prisma } from "./config/database.js";
import { env } from "./config/env.js";

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await prisma.$connect();
    console.log("✅ Banco de dados conectado.");
    app.listen(env.PORT, () => console.log(`🚀 Servidor rodando na porta ${env.PORT}`));
  } catch (e) {
    console.error("❌ Falha ao iniciar:", e);
  }
}
startServer();