const express = require('express');
const BukuController = require('../controllers/bukuController');
const AuthMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

const bukuController = new BukuController();
const authMiddleware = new AuthMiddleware();

router.get('/', bukuController.getAllBuku.bind(bukuController));
router.get('/:id', bukuController.getBukuById.bind(bukuController));
router.post('/', authMiddleware.protectPetugasRoute.bind(authMiddleware), bukuController.addBuku.bind(bukuController));
router.patch('/:id', authMiddleware.protectPetugasRoute.bind(authMiddleware), bukuController.updateBuku.bind(bukuController));
router.delete('/:id', authMiddleware.protectPetugasRoute.bind(authMiddleware), bukuController.softDeleteBuku.bind(bukuController));

module.exports = router;