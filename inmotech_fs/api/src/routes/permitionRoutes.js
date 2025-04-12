const express = require('express');
const PermitionController = require('../controllers/PermitionController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Aplicar middleware de verificación de token y roles
router.get('/', authMiddleware.verifyToken, PermitionController.obtenerTodos);
router.post('/', authMiddleware.verifyToken, authMiddleware.checkRole('Admin'), PermitionController.crear);
router.put('/:id', authMiddleware.verifyToken, authMiddleware.checkRole('Admin'), PermitionController.actualizar);
router.delete('/:id', authMiddleware.verifyToken, authMiddleware.checkRole('Admin'), PermitionController.eliminar);

module.exports = router;