/*
  Warnings:

  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Menu` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MenuItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MenuToMenuItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Menu` DROP FOREIGN KEY `Menu_customerId_fkey`;

-- DropForeignKey
ALTER TABLE `_MenuToMenuItem` DROP FOREIGN KEY `_MenuToMenuItem_A_fkey`;

-- DropForeignKey
ALTER TABLE `_MenuToMenuItem` DROP FOREIGN KEY `_MenuToMenuItem_B_fkey`;

-- DropTable
DROP TABLE `Customer`;

-- DropTable
DROP TABLE `Menu`;

-- DropTable
DROP TABLE `MenuItem`;

-- DropTable
DROP TABLE `_MenuToMenuItem`;
