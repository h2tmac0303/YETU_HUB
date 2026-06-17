-- AlterTable
ALTER TABLE "Connection" ADD COLUMN     "message" TEXT;

-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "status" "ConnectionStatus" NOT NULL DEFAULT 'PENDING';
