// repository class for auth, both for anggota and petugas
const db = require('../config/dbConnect');
const bcrypt = require('bcrypt');


// this class is used to handle all the database operation for auth. Preference using try catch block and async await
class AuthRepository {
    constructor() {
        this.db = db;
    }

    async registerAnggota(nama, email, password) {
        try {
            const isEmailExist = await this.db.anggota.findUnique({
                where: {
                    email: email
                }
            });
            if (isEmailExist) {
                throw new Error('Email already registered');
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const anggota = await this.db.anggota.create({
                data: {
                    nama: nama,
                    email: email,
                    password: hashedPassword
                }
            });
            return anggota;
        } catch (error) {
            throw error;
        }
    }

    async registerPetugas(nama, email, password) {
        try {
            const isEmailExist = await this.db.petugas.findUnique({
                where: {
                    email: email
                }
            });
            if (isEmailExist) {
                throw new Error('Email already registered');
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const petugas = await this.db.petugas.create({
                data: {
                    nama: nama,
                    email: email,
                    password: hashedPassword
                }
            });
            return petugas;
        } catch (error) {
            throw error;
        }
    }

    async loginAnggota(email, password) {
        try {
            const anggota = await this.db.anggota.findUnique({
                where: {
                    email: email
                }
            });
            if (!anggota) {
                throw new Error('Email not found');
            }
            const isPasswordMatch = await bcrypt.compare(password, anggota.password);
            if (!isPasswordMatch) {
                throw new Error('Password not match');
            }
            return anggota;
        } catch (error) {
            throw error;
        }
    }

    async loginPetugas(email, password) {
        try {
            const petugas = await this.db.petugas.findUnique({
                where: {
                    email: email
                }
            });
            if (!petugas) {
                throw new Error('Email not found');
            }
            const isPasswordMatch = await bcrypt.compare(password, petugas.password);
            if (!isPasswordMatch) {
                throw new Error('Password not match');
            }
            return petugas;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AuthRepository;