import { z } from "zod";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Força o dotenv a procurar o arquivo .env na raiz do projeto

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  PORT: z.string().default("3000"),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(16),
  // Adicione a linha faltante aqui para resolver o erro no AuthService:
  JWT_EXPIRES_IN: z.string().default("7d"), 
  CORS_ORIGIN: z.string().default("*"),
});

// O Zod faz o parse e valida em tempo de execução
export const env = envSchema.parse(process.env);

// Isso permite que o restante do app saiba exatamente quais os tipos
export type Env = z.infer<typeof envSchema>;