// Repository class for Buku CRUD
const db = require('../config/dbConnect');

class BukuRepository {
    constructor() {
        this.db = db;
    }

    async getAllBuku() {
        try {
            const buku = await this.db.buku.findMany({
                where: {
                    deletedAt: null
                }
            });
            return buku;
        } catch (error) {
            throw error;
        }
    }

    async getBukuById(id) {
        try {
            const buku = await this.db.buku.findUnique({
                where: {
                    id: parseInt(id)
                }
            });
            return buku;
        } catch (error) {
            throw error;
        }
    }

    async addBuku(judul, pengarang, penerbit, tahun) {
        try {
            const buku = await this.db.buku.create({
                data: {
                    judul: judul,
                    pengarang: pengarang,
                    penerbit: penerbit,
                    tahun: parseInt(tahun),
                }
            });
            return buku;
        } catch (error) {
            throw error;
        }
    }

    async updateBuku(id, judul, pengarang, penerbit, tahun) {
        try {
            const buku = await this.db.buku.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    judul: judul,
                    pengarang: pengarang,
                    penerbit: penerbit,
                    tahun: tahun ? parseInt(tahun) : undefined,
                }
            });
            return buku;
        } catch (error) {
            throw error;
        }
    }

    async updateKesiapanBuku(id, siapPinjam) {
        try {
            const buku = await this.db.buku.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    siapPinjam: siapPinjam
                }
            });
            return buku;
        } catch (error) {
            throw error;
        }
    }

    async softDeleteBuku(id) {
        try {
            const buku = await this.db.buku.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    deletedAt: new Date()
                }
            });
            return buku;
        } catch (error) {
            throw error;
        }
    }

    // used in peminjaman
    async updateStatusReadyBuku(id, status) {
        try {
            const buku = await this.db.buku.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    siapPinjam: status
                }
            });
            return buku;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = BukuRepository;