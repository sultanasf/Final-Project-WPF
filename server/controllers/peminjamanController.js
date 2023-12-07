// Controller for peminjaman CRUD
const PeminjamanRepository = require('../repository/peminjamanRepository');
const DetailPeminjamanRepository = require('../repository/detailPeminjamanRepository');
const BukuRepository = require('../repository/bukuRepository');

class PeminjamanController {
    constructor() {
        this.peminjamanRepository = new PeminjamanRepository();
        this.detailPeminjamanRepository = new DetailPeminjamanRepository();
        this.bukuRepository = new BukuRepository();
    }

    async getAllPeminjaman(req, res) {
        try {
            const peminjaman = await this.peminjamanRepository.getAllPeminjaman();
            res.status(200).json({
                message: 'success get all peminjaman',
                data: peminjaman,
            });
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    async getPeminjamanById(req, res) {
        try {
            const peminjaman = await this.peminjamanRepository.getPeminjamanById(req.params.id);
            if (!peminjaman) {
                return res.status(404).json({
                    message: 'peminjaman not found'
                });
            }
            res.status(200).json({
                message: 'success get peminjaman by id',
                data: peminjaman,
            });
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    async getPeminjamanByPetugasId(req, res) {
        try {
            const peminjaman = await this.peminjamanRepository.getPeminjamanByPetugasId(req.params.id);
            if (peminjaman.length === 0) {
                return res.status(404).json({
                    message: 'this petugas has no peminjaman'
                });
            }
            res.status(200).json({
                message: 'success get peminjaman by petugas id',
                data: peminjaman,
            });
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    async getPeminjamanByAnggotaId(req, res) {
        try {
            const peminjaman = await this.peminjamanRepository.getPeminjamanByAnggotaId(req.params.id);
            if (peminjaman.length === 0) {
                return res.status(404).json({
                    message: 'this anggota has no peminjaman'
                });
            }
            res.status(200).json({
                message: 'success get peminjaman by anggota id',
                data: peminjaman,
            });
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    async addNewPeminjaman(req, res) {
        try {
            const {
                anggotaId,
                petugasId,
                tanggalPinjam,
                bukuId
            } = req.body;
            const peminjamanId = await this.peminjamanRepository.addNewPeminjaman(anggotaId, petugasId, tanggalPinjam);

            // add detail peminjaman for each buku(buku is array)
            // Also update each buku status to false 
            bukuId.forEach(async (id) => {
                await this.detailPeminjamanRepository.addNewDetailPeminjaman(peminjamanId, id);
                await this.bukuRepository.updateKesiapanBuku(id, false);
            });

            res.status(201).json({
                message: 'Peminjaman berhasil ditambahkan',
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: error.message,
            });
        }
    }

    async updatePeminjaman(req, res) {
        try {
            const { id } = req.params;
            const {
                anggotaId,
                petugasId,
                tanggalKembali,
            } = req.body;

            const peminjaman = await this.peminjamanRepository.updatePeminjaman(id, anggotaId, petugasId, tanggalKembali);

            // if tanggalKembali is not null, then update each buku siapPinjam to true
            if (peminjaman.tanggalKembali) {
                const detailPeminjaman = await this.detailPeminjamanRepository.getDetailPeminjamanByIdPeminjaman(id);
                detailPeminjaman.forEach(async (detail) => {
                    await this.bukuRepository.updateKesiapanBuku(detail.bukuId, true);
                });
            } else {
                // if tanggalKembali is null, then update each buku siapPinjam to false
                const detailPeminjaman = await this.detailPeminjamanRepository.getDetailPeminjamanByIdPeminjaman(id);
                detailPeminjaman.forEach(async (detail) => {
                    await this.bukuRepository.updateKesiapanBuku(detail.bukuId, false);
                });
            }

            res.status(200).json({
                message: 'Peminjaman berhasil diupdate',
                data: peminjaman,
            });
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }
}

module.exports = PeminjamanController;