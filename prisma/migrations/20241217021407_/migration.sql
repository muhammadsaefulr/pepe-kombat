/*
  Warnings:

  - You are about to drop the `activities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `friendlist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ranks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "activities" DROP CONSTRAINT "activities_telegramId_fkey";

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

-- DropTable
DROP TABLE "activities";

-- DropTable
DROP TABLE "friendlist";

-- DropTable
DROP TABLE "ranks";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "telegramId" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "rankId" INTEGER NOT NULL,
    "coinBalance" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rank" (
    "id" SERIAL NOT NULL,
    "rankName" VARCHAR(255) NOT NULL,
    "minPoints" INTEGER NOT NULL,

    CONSTRAINT "Rank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Friendlist" (
    "id" SERIAL NOT NULL,
    "telegramId" VARCHAR(255) NOT NULL,
    "friendId" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" VARCHAR(50) NOT NULL,

    CONSTRAINT "Friendlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" SERIAL NOT NULL,
    "telegramId" VARCHAR(255) NOT NULL,
    "activityType" VARCHAR(255) NOT NULL,
    "coinsEarned" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_telegramId_key" ON "Users"("telegramId");

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_rankId_fkey" FOREIGN KEY ("rankId") REFERENCES "Rank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friendlist" ADD CONSTRAINT "Friendlist_telegramId_fkey" FOREIGN KEY ("telegramId") REFERENCES "Users"("telegramId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friendlist" ADD CONSTRAINT "Friendlist_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "Users"("telegramId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_referrerId_fkey" FOREIGN KEY ("referrerId") REFERENCES "Users"("telegramId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_refereeId_fkey" FOREIGN KEY ("refereeId") REFERENCES "Users"("telegramId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_telegramId_fkey" FOREIGN KEY ("telegramId") REFERENCES "Users"("telegramId") ON DELETE RESTRICT ON UPDATE CASCADE;
