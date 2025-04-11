const express = require('express');
const ModuleController = require('../controllers/ModuleController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Aplicar middleware de verificación de token y roles
router.get('/', authMiddleware.verifyToken, ModuleController.obtenerTodos);
router.post('/', authMiddleware.verifyToken, authMiddleware.checkRole('Admin'), ModuleController.crear);
router.put('/:id', authMiddleware.verifyToken, authMiddleware.checkRole('Admin'), ModuleController.actualizar);
router.delete('/:id', authMiddleware.verifyToken, authMiddleware.checkRole('Admin'), ModuleController.eliminar);

// Rutas adicionales para asignar roles y permisos
router.post('/assign-role', authMiddleware.verifyToken, authMiddleware.checkRole('Admin'), ModuleController.asignarRol);
router.post('/assign-permission', authMiddleware.verifyToken, authMiddleware.checkRole('Admin'), ModuleController.asignarPermiso);
router.get('/:moduleId/roles', authMiddleware.verifyToken, ModuleController.obtenerRoles);
router.get('/:moduleRoleId/permissions', authMiddleware.verifyToken, ModuleController.obtenerPermisos);
router.delete('/remove-role', authMiddleware.verifyToken, authMiddleware.checkRole('Admin'), ModuleController.eliminarRol);
router.delete('/remove-permission', authMiddleware.verifyToken, authMiddleware.checkRole('Admin'), ModuleController.eliminarPermiso);

module.exports = router;