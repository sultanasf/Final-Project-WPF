const UserRepository = require('../repository/userRepository');
const UserService = require('../services/userService');

class UserController {
    constructor() {
        this.userRepository = new UserRepository();
        this.userService = new UserService();
    }

    async getAllAnggota(req, res) {
        try {
            // get all anggota
            const anggota = await this.userRepository.getAllAnggota();
            res.status(200).json({
                message: 'Successfully get all anggota',
                data: anggota
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async getAllPetugas(req, res) {
        try {
            // get all petugas
            const petugas = await this.userRepository.getAllPetugas();
            res.status(200).json({
                message: 'Successfully get all petugas',
                data: petugas
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async getAnggotaById(req, res) {
        try {
            // get id from req.payload
            const { id } = req.payload;
            // get anggota by id
            const anggota = await this.userRepository.getAnggotaById(id);
            res.status(200).json({
                message: 'Successfully get anggota by id',
                data: anggota
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async getPetugasById(req, res) {
        try {
            // get id from req.payload
            const { id } = req.payload;
            // get petugas by id 
            const petugas = await this.userRepository.getPetugasById(id);
            res.status(200).json({
                message: 'Successfully get petugas by id',
                data: petugas
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async updateAnggotaById(req, res) {
        try {
            // get id from req.payload
            const { id } = req.payload;
            // get data from req.body
            const data = req.body;
            // update anggota by id
            const anggota = await this.userRepository.updateAnggotaById(id, data);
            res.status(200).json({
                message: 'Successfully update anggota by id',
                data: anggota
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async updatePetugasById(req, res) {
        try {
            // get id from req.payload
            const { id } = req.payload;
            // get data from req.body
            const data = req.body;
            // update petugas by id
            const petugas = await this.userRepository.updatePetugasById(id, data);
            res.status(200).json({
                message: 'Successfully update petugas by id',
                data: petugas
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async getRoleFromToken(req, res) {
        try {
            // get token from req.headers.authorization
            const token = req.headers.authorization.split(' ')[1];
            // get role from token
            const role = await this.userService.verifyTokenAndGetRole(token);
            res.status(200).json({
                message: 'Successfully get role from token',
                data: role
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
}

module.exports = UserController;