// Repository class for User CRUD
const db = require('../config/dbConnect');
const bcrypt = require('bcrypt');

class UserRepository {
    constructor() {
        this.db = db;
    }

    async getAllAnggota() {
        try {
            const anggota = await this.db.anggota.findMany({
                where: {
                    deletedAt: null
                }
            });
            return anggota;
        } catch (error) {
            throw error;
        }
    }

    async getAllPetugas() {
        try {
            const petugas = await this.db.petugas.findMany({
                where: {
                    deletedAt: null
                }
            });
            return petugas;
        } catch (error) {
            throw error;
        }
    }

    async getAnggotaById(id) {
        try {
            const anggota = await this.db.anggota.findUnique({
                where: {
                    id: parseInt(id)
                },
            });
            return anggota;
        } catch (error) {
            throw error;
        }
    }

    async getPetugasById(id) {
        try {
            const petugas = await this.db.petugas.findUnique({
                where: {
                    id: parseInt(id)
                },
            });
            return petugas;
        } catch (error) {
            throw error;
        }
    }

    async updateAnggotaById(id, data) {
        try {
            let hashedPassword;
            const oldData = await this.db.anggota.findUnique({
                where: {
                    id: parseInt(id)
                }
            });
            if (data.password) {
                hashedPassword = await bcrypt.hash(data.password, 10);
            }
            const anggota = await this.db.anggota.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    // if data is empty, it will not update the data
                    nama: data.nama ? data.nama : oldData.nama,
                    email: data.email ? data.email : oldData.email,
                    password: data.password ? hashedPassword : oldData.password,
                    updatedAt: new Date()
                }
            });
            return anggota;
        } catch (error) {
            throw error;
        }
    }

    async updatePetugasById(id, data) {
        try {
            let hashedPassword;
            const oldData = await this.db.petugas.findUnique({
                where: {
                    id: parseInt(id)
                }
            });
            if (data.password) {
                hashedPassword = await bcrypt.hash(data.password, 10);
            }
            const petugas = await this.db.petugas.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    // if data is empty, it will not update the data
                    nama: data.nama ? data.nama : oldData.nama,
                    email: data.email ? data.email : oldData.email,
                    password: data.password ? hashedPassword : oldData.password,
                    updatedAt: new Date()
                }
            });
            return petugas;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserRepository;