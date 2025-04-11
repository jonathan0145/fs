const express = require('express');
const ProfileController = require('../controllers/ProfileController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Aplicar middleware de verificación de token y roles
router.get('/', authMiddleware.verifyToken, ProfileController.obtenerTodos);
router.post('/', authMiddleware.verifyToken, authMiddleware.checkRole('Admin'), ProfileController.crear);
router.put('/:id', authMiddleware.verifyToken, authMiddleware.checkRole('Admin'), ProfileController.actualizar);
router.delete('/:id', authMiddleware.verifyToken, authMiddleware.checkRole('Admin'), ProfileController.eliminar);

module.exports = router;