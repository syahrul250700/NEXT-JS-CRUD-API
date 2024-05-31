/*
  Warnings:

  - You are about to drop the column `hashedPassword` on the `User` table. All the data in the column will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `hashedPassword`,
    ADD COLUMN `password` VARCHAR(300) NOT NULL,
    ADD COLUMN `username` VARCHAR(50) NOT NULL;
