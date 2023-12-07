const jwt = require('jsonwebtoken');

class UserService {
    constructor() {
        this.jwt = jwt;
    }

    async verifyTokenAndGetRole(token) {
        try {
            const payload = this.jwt.verify(token, process.env.TOKEN_SECRET);
            return payload.role;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService;