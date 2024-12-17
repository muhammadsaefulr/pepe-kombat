/*
  Warnings:

  - Changed the type of `telegramId` on the `activity` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `telegramId` on the `friendlist` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `friendId` on the `friendlist` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `referrerId` on the `referrals` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `refereeId` on the `referrals` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `telegramId` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "activity" DROP CONSTRAINT "activity_telegramId_fkey";

-- DropForeignKey
ALTER TABLE "friendlist" DROP CONSTRAINT "friendlist_friendId_fkey";

-- DropForeignKey
ALTER TABLE "friendlist" DROP CONSTRAINT "friendlist_telegramId_fkey";

-- DropForeignKey
ALTER TABLE "referrals" DROP CONSTRAINT "referrals_refereeId_fkey";

-- DropForeignKey
ALTER TABLE "referrals" DROP CONSTRAINT "referrals_referrerId_fkey";

-- AlterTable
ALTER TABLE "activity" DROP COLUMN "telegramId",
ADD COLUMN     "telegramId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "friendlist" DROP COLUMN "telegramId",
ADD COLUMN     "telegramId" INTEGER NOT NULL,
DROP COLUMN "friendId",
ADD COLUMN     "friendId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "referrals" DROP COLUMN "referrerId",
ADD COLUMN     "referrerId" INTEGER NOT NULL,
DROP COLUMN "refereeId",
ADD COLUMN     "refereeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "telegramId",
ADD COLUMN     "telegramId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "friendlist_telegramId_friendId_key" ON "friendlist"("telegramId", "friendId");

-- CreateIndex
CREATE UNIQUE INDEX "referrals_refereeId_key" ON "referrals"("refereeId");

-- CreateIndex
CREATE UNIQUE INDEX "users_telegramId_key" ON "users"("telegramId");

-- AddForeignKey
ALTER TABLE "friendlist" ADD CONSTRAINT "friendlist_telegramId_fkey" FOREIGN KEY ("telegramId") REFERENCES "users"("telegramId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friendlist" ADD CONSTRAINT "friendlist_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "users"("telegramId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_referrerId_fkey" FOREIGN KEY ("referrerId") REFERENCES "users"("telegramId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_refereeId_fkey" FOREIGN KEY ("refereeId") REFERENCES "users"("telegramId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity" ADD CONSTRAINT "activity_telegramId_fkey" FOREIGN KEY ("telegramId") REFERENCES "users"("telegramId") ON DELETE RESTRICT ON UPDATE CASCADE;
