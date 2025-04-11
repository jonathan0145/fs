const express = require('express');
const RoleController = require('../controllers/RoleController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Aplicar middleware de verificación de token y roles
router.get('/', authMiddleware.verifyToken, RoleController.obtenerTodos);
router.post('/', authMiddleware.verifyToken, authMiddleware.checkRole('Admin'), RoleController.crear);
router.put('/:id', authMiddleware.verifyToken, authMiddleware.checkRole('Admin'), RoleController.actualizar);
router.delete('/:id', authMiddleware.verifyToken, authMiddleware.checkRole('Admin'), RoleController.eliminar);

module.exports = router;