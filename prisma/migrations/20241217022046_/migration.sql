/*
  Warnings:

  - A unique constraint covering the columns `[telegramId,friendId]` on the table `Friendlist` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Friendlist_telegramId_friendId_key" ON "Friendlist"("telegramId", "friendId");
