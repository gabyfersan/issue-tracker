-- CreateEnum
CREATE TYPE "STATUS" AS ENUM ('OPEN', 'IN_PROGESS', 'CLOSED');

-- CreateTable
CREATE TABLE "Issue" (
    "id" SERIAL NOT NULL,
    "tittle" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "status" "STATUS" NOT NULL DEFAULT 'OPEN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Issue_pkey" PRIMARY KEY ("id")
);
