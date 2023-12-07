const BukuRepository = require('../repository/bukuRepository');

class BukuController {
    constructor() {
        this.bukuRepository = new BukuRepository();
    }

    async getAllBuku(req, res) {
        try {
            const buku = await this.bukuRepository.getAllBuku();
            res.status(200).json({
                message: 'Get all buku success',
                data: buku
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getBukuById(req, res) {
        try {
            const { id } = req.params;
            const buku = await this.bukuRepository.getBukuById(id);
            if (!buku) {
                return res.status(404).json({
                    message: 'Buku not found'
                });
            }
            res.status(200).json({
                message: 'Get buku by id success',
                data: buku
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async addBuku(req, res) {
        try {
            const { judul, pengarang, penerbit, tahun } = req.body;
            const buku = await this.bukuRepository.addBuku(judul, pengarang, penerbit, tahun);
            res.status(200).json({
                message: 'Add buku success',
                data: buku
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateBuku(req, res) {
        try {
            const { id } = req.params;
            const { judul, pengarang, penerbit, tahun } = req.body;
            const buku = await this.bukuRepository.updateBuku(id, judul, pengarang, penerbit, tahun);
            res.status(200).json({
                message: 'Update buku success',
                data: buku
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    }

    async softDeleteBuku(req, res) {
        try {
            const { id } = req.params;
            const buku = await this.bukuRepository.softDeleteBuku(id);
            res.status(200).json({
                message: 'Soft delete buku success',
                data: buku
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = BukuController;