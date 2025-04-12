const express = require('express');
const router = express.Router();
const { auth, esAdmin } = require('../middleware/auth');
const {
    registrarVisualizacion,
    obtenerEstadisticas
} = require('../controllers/visualizationController');

// Ruta para registrar visualización (puede ser usada con o sin autenticación)
router.post('/', registrarVisualizacion);

// Ruta protegida para obtener estadísticas (solo admin)
router.get('/estadisticas', auth, esAdmin, obtenerEstadisticas);

module.exports = router;