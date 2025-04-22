/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Attendee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Attendee" DROP COLUMN "createdAt",
ALTER COLUMN "company" DROP NOT NULL,
ALTER COLUMN "telephone" DROP NOT NULL;
