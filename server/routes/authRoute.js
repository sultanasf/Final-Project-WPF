const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');

const authController = new AuthController();

router.post('/register/anggota', authController.registerAnggota.bind(authController));
router.post('/register/petugas', authController.registerPetugas.bind(authController));
router.post('/login/anggota', authController.loginAnggota.bind(authController));
router.post('/login/petugas', authController.loginPetugas.bind(authController));
router.get('/logout', authController.logout.bind(authController));

module.exports = router;