const express = require('express');
const router = express.Router();
const { auth, esAdmin } = require('../middleware/auth');
const {
    crearPropiedad,
    obtenerPropiedades,
    obtenerPropiedad,
    actualizarPropiedad,
    eliminarPropiedad
} = require('../controllers/propertyController');

// Rutas públicas
router.get('/', obtenerPropiedades);
router.get('/:id', obtenerPropiedad);

// Rutas protegidas
router.post('/', auth, crearPropiedad);
router.put('/:id', auth, actualizarPropiedad);
router.delete('/:id', auth, eliminarPropiedad);

module.exports = router;