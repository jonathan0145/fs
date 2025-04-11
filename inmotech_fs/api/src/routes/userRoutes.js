const express = require('express');
const UserController = require('../controllers/UserController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Aplicar middleware de verificación de token y roles
router.get('/', authMiddleware.verifyToken, UserController.obtenerTodos);
router.post('/', authMiddleware.verifyToken, authMiddleware.checkRole('Admin'), UserController.crear);
router.put('/:id', authMiddleware.verifyToken, authMiddleware.checkRole('Admin'), UserController.actualizar);
router.delete('/:id', authMiddleware.verifyToken, authMiddleware.checkRole('Admin'), UserController.eliminar);

module.exports = router;