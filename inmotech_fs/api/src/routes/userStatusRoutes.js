const express = require('express');
const UserStatusController = require('../controllers/UserStatusController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Aplicar middleware de verificación de token y roles
router.get('/', authMiddleware.verifyToken, UserStatusController.obtenerTodos);
router.post('/', authMiddleware.verifyToken, authMiddleware.checkRole('Admin'), UserStatusController.crear);
router.put('/:id', authMiddleware.verifyToken, authMiddleware.checkRole('Admin'), UserStatusController.actualizar);
router.delete('/:id', authMiddleware.verifyToken, authMiddleware.checkRole('Admin'), UserStatusController.eliminar);

module.exports = router;