// Route for peminjaman
const express = require('express');
const router = express.Router();
const PeminjamanController = require('../controllers/peminjamanController');
const AuthMiddleware = require('../middlewares/authMiddleware');

const peminjamanController = new PeminjamanController();
const authMiddleware = new AuthMiddleware();

router.get('/', peminjamanController.getAllPeminjaman.bind(peminjamanController));
router.get('/:id', peminjamanController.getPeminjamanById.bind(peminjamanController));
router.get('/petugas/:id', authMiddleware.protectPetugasRoute.bind(authMiddleware), peminjamanController.getPeminjamanByPetugasId.bind(peminjamanController));
router.get('/anggota/:id', authMiddleware.protectAnggotaRoute.bind(authMiddleware), peminjamanController.getPeminjamanByAnggotaId.bind(peminjamanController));
router.post('/', authMiddleware.protectPetugasRoute.bind(authMiddleware), peminjamanController.addNewPeminjaman.bind(peminjamanController));
router.patch('/:id', authMiddleware.protectPetugasRoute.bind(authMiddleware), peminjamanController.updatePeminjaman.bind(peminjamanController));

module.exports = router;