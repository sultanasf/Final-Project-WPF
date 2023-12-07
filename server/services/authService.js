// non query class for authentication
const jwt = require('jsonwebtoken');

class AuthService {
    constructor() {
        this.jwt = jwt;
    }

    generateToken(payload) {
        try {
            const token = this.jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '1d' });
            return token;
        } catch (error) {
            throw error;
        }
    }

    async verifyToken(token) {
        try {
            const payload = this.jwt.verify(token, process.env.TOKEN_SECRET);
            return payload;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AuthService;