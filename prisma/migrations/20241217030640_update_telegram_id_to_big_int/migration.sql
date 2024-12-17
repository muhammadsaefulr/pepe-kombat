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
ALTER TABLE "activity" ALTER COLUMN "telegramId" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "friendlist" ALTER COLUMN "telegramId" SET DATA TYPE BIGINT,
ALTER COLUMN "friendId" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "referrals" ALTER COLUMN "referrerId" SET DATA TYPE BIGINT,
ALTER COLUMN "refereeId" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "telegramId" SET DATA TYPE BIGINT;

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
