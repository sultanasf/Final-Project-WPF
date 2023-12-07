-- DropForeignKey
ALTER TABLE `detailpeminjaman` DROP FOREIGN KEY `DetailPeminjaman_bukuId_fkey`;

-- AddForeignKey
ALTER TABLE `DetailPeminjaman` ADD CONSTRAINT `DetailPeminjaman_bukuId_fkey` FOREIGN KEY (`bukuId`) REFERENCES `Buku`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
