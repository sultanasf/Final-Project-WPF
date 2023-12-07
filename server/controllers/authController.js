const AuthRepository = require('../repository/authRepository');
const AuthService = require('../services/authService');

class AuthController {
    constructor() {
        this.authRepository = new AuthRepository();
        this.authService = new AuthService();
    }

    async registerAnggota(req, res) {
        try {
            const { nama, email, password } = req.body;
            const anggota = await this.authRepository.registerAnggota(nama, email, password);
            if (!anggota) {
                throw new Error('Register anggota failed');
            }
            res.status(200).json({
                message: 'Register anggota success',
                data: anggota
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async registerPetugas(req, res) {
        try {
            const { nama, email, password } = req.body;
            const petugas = await this.authRepository.registerPetugas(nama, email, password);
            if (!petugas) {
                throw new Error('Register petugas failed');
            }
            res.status(200).json({
                message: 'Register petugas success',
                data: petugas
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async loginAnggota(req, res) {
        try {
            const { email, password } = req.body;
            const anggota = await this.authRepository.loginAnggota(email, password);
            const token = this.authService.generateToken({
                id: anggota.id,
                role: 'anggota'
            });
            res.status(200).json({
                message: 'Login anggota success, token generated',
                token: token
            });
        } catch (error) {
            res.status(401).json({
                message: error.message
            }); // 401: Unauthorized
        }
    }

    async loginPetugas(req, res) {
        try {
            const { email, password } = req.body;
            const petugas = await this.authRepository.loginPetugas(email, password);
            const token = this.authService.generateToken({
                id: petugas.id,
                role: 'petugas'
            });
            res.status(200).json({
                message: 'Login petugas success, token generated',
                token: token
            });
        } catch (error) {
            res.status(401).json({
                message: error.message
            }); // 401: Unauthorized
        }
    }

    async logout(req, res) {
        try {
            res.clearCookie('token');
            res.status(200).json({
                message: 'Logout success, token cleared in httpOnly cookie'
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
}

module.exports = AuthController;