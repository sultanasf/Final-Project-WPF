const AuthService = require('../services/authService');

class AuthMiddleware {
    constructor() {
        this.authService = new AuthService();
    }

    async protectAnggotaRoute(req, res, next) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                throw new Error('Token not found');
            }
            const payload = await this.authService.verifyToken(token);
            if (payload.role !== 'anggota') {
                throw new Error('Invalid role');
            }
            req.payload = payload;
            next();
        } catch (error) {
            res.status(401).json({
                message: error.message
            });
        }
    }

    async protectPetugasRoute(req, res, next) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                throw new Error('Token not found');
            }
            const payload = await this.authService.verifyToken(token);
            if (payload.role !== 'petugas') {
                throw new Error('Invalid role');
            }
            req.payload = payload;
            next();
        } catch (error) {
            res.status(401).json({
                message: error.message
            });
        }
    }
}

module.exports = AuthMiddleware;