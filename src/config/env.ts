import dotenv from "dotenv";

dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 3000,

  DATABASE_URL: process.env.DATABASE_URL as string,

  JWT_SECRET: process.env.JWT_SECRET as string,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "7d",

  CORS_ORIGIN: process.env.CORS_ORIGIN || "*"
};

// Validação simples (evita crash silencioso)
if (!env.DATABASE_URL) {
  throw new Error("❌ DATABASE_URL não definida no .env");
}

if (!env.JWT_SECRET) {
  throw new Error("❌ JWT_SECRET não definida no .env");
}