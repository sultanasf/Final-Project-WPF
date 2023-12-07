const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middlewares/authMiddleware');
const UserController = require('../controllers/userController');

const authMiddleware = new AuthMiddleware();
const userController = new UserController();

router.get('/get-all-anggota', authMiddleware.protectPetugasRoute.bind(authMiddleware), userController.getAllAnggota.bind(userController));
router.get('/get-all-petugas', authMiddleware.protectPetugasRoute.bind(authMiddleware), userController.getAllPetugas.bind(userController));
router.get('/get-anggota', authMiddleware.protectAnggotaRoute.bind(authMiddleware), userController.getAnggotaById.bind(userController));
router.get('/get-petugas', authMiddleware.protectPetugasRoute.bind(authMiddleware), userController.getPetugasById.bind(userController));
router.patch('/update-anggota', authMiddleware.protectAnggotaRoute.bind(authMiddleware), userController.updateAnggotaById.bind(userController));
router.patch('/update-petugas', authMiddleware.protectPetugasRoute.bind(authMiddleware), userController.updatePetugasById.bind(userController));
router.get('/get-role', userController.getRoleFromToken.bind(userController));

module.exports = router;