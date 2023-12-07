/*
  Warnings:

  - You are about to drop the column `tanggal` on the `peminjaman` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `buku` ADD COLUMN `siapPinjam` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `peminjaman` DROP COLUMN `tanggal`,
    ADD COLUMN `tanggalKembali` DATETIME(3) NULL,
    ADD COLUMN `tanggalPinjam` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
