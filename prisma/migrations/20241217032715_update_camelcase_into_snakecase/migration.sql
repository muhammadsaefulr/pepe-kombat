/*
  Warnings:

  - You are about to drop the column `activityType` on the `activity` table. All the data in the column will be lost.
  - You are about to drop the column `coinsEarned` on the `activity` table. All the data in the column will be lost.
  - You are about to drop the column `telegramId` on the `activity` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `friendlist` table. All the data in the column will be lost.
  - You are about to drop the column `friendId` on the `friendlist` table. All the data in the column will be lost.
  - You are about to drop the column `telegramId` on the `friendlist` table. All the data in the column will be lost.
  - You are about to drop the column `minPoints` on the `rank` table. All the data in the column will be lost.
  - You are about to drop the column `rankName` on the `rank` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `referrals` table. All the data in the column will be lost.
  - You are about to drop the column `refereeId` on the `referrals` table. All the data in the column will be lost.
  - You are about to drop the column `referrerId` on the `referrals` table. All the data in the column will be lost.
  - You are about to drop the column `rewardStatus` on the `referrals` table. All the data in the column will be lost.
  - You are about to drop the column `coinBalance` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `rankId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `telegramId` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[telegram_id,friend_id]` on the table `friendlist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[referee_id]` on the table `referrals` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[telegram_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `activity_type` to the `activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coins_earned` to the `activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telegram_id` to the `activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `friend_id` to the `friendlist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telegram_id` to the `friendlist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `min_points` to the `rank` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rank_name` to the `rank` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referee_id` to the `referrals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referrer_id` to the `referrals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reward_status` to the `referrals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rank_id` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telegram_id` to the `users` table without a default value. This is not possible if the table is not empty.

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

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_rankId_fkey";

-- DropIndex
DROP INDEX "friendlist_telegramId_friendId_key";

-- DropIndex
DROP INDEX "referrals_refereeId_key";

-- DropIndex
DROP INDEX "users_telegramId_key";

-- AlterTable
ALTER TABLE "activity" DROP COLUMN "activityType",
DROP COLUMN "coinsEarned",
DROP COLUMN "telegramId",
ADD COLUMN     "activity_type" VARCHAR(255) NOT NULL,
ADD COLUMN     "coins_earned" INTEGER NOT NULL,
ADD COLUMN     "telegram_id" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "friendlist" DROP COLUMN "createdAt",
DROP COLUMN "friendId",
DROP COLUMN "telegramId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "friend_id" BIGINT NOT NULL,
ADD COLUMN     "telegram_id" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "rank" DROP COLUMN "minPoints",
DROP COLUMN "rankName",
ADD COLUMN     "min_points" INTEGER NOT NULL,
ADD COLUMN     "rank_name" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "referrals" DROP COLUMN "createdAt",
DROP COLUMN "refereeId",
DROP COLUMN "referrerId",
DROP COLUMN "rewardStatus",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "referee_id" BIGINT NOT NULL,
ADD COLUMN     "referrer_id" BIGINT NOT NULL,
ADD COLUMN     "reward_status" VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "coinBalance",
DROP COLUMN "createdAt",
DROP COLUMN "rankId",
DROP COLUMN "telegramId",
ADD COLUMN     "coin_balance" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "rank_id" INTEGER NOT NULL,
ADD COLUMN     "telegram_id" BIGINT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "friendlist_telegram_id_friend_id_key" ON "friendlist"("telegram_id", "friend_id");

-- CreateIndex
CREATE UNIQUE INDEX "referrals_referee_id_key" ON "referrals"("referee_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_telegram_id_key" ON "users"("telegram_id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_rank_id_fkey" FOREIGN KEY ("rank_id") REFERENCES "rank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friendlist" ADD CONSTRAINT "friendlist_friend_id_fkey" FOREIGN KEY ("friend_id") REFERENCES "users"("telegram_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friendlist" ADD CONSTRAINT "friendlist_telegram_id_fkey" FOREIGN KEY ("telegram_id") REFERENCES "users"("telegram_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_referee_id_fkey" FOREIGN KEY ("referee_id") REFERENCES "users"("telegram_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_referrer_id_fkey" FOREIGN KEY ("referrer_id") REFERENCES "users"("telegram_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity" ADD CONSTRAINT "activity_telegram_id_fkey" FOREIGN KEY ("telegram_id") REFERENCES "users"("telegram_id") ON DELETE RESTRICT ON UPDATE CASCADE;
