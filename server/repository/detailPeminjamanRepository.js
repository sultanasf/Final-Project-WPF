// Repository class for DetailPeminjaman buku CRUD
const db = require('../config/dbConnect');

class DetailPeminjamanRepository {
    constructor() {
        this.db = db;
    }

    async getDetailPeminjamanById(id) {
        try {
            const detailPeminjaman = await this.db.detailPeminjaman.findUnique({
                where: {
                    id: parseInt(id)
                }
            });
            return detailPeminjaman;
        } catch (error) {
            throw error;
        }
    }

    async getDetailPeminjamanByIdPeminjaman(peminjamanId) {
        try {
            const detailPeminjaman = await this.db.detailPeminjaman.findMany({
                where: {
                    peminjamanId: parseInt(peminjamanId)
                }
            });
            return detailPeminjaman;
        } catch (error) {
            throw error;
        }
    }

    async addNewDetailPeminjaman(peminjamanId, bukuId) {
        try {
            const detailPeminjaman = await this.db.detailPeminjaman.create({
                data: {
                    peminjamanId,
                    bukuId,
                }
            });
            return detailPeminjaman;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = DetailPeminjamanRepository;