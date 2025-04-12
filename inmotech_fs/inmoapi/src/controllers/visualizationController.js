const Visualization = require('../models/Visualization');
const Property = require('../models/Property');

// Registrar nueva visualización
const registrarVisualizacion = async (req, res) => {
    try {
        const { propiedadId, tipoDispositivo, duracion } = req.body;
        
        // Verificar si la propiedad existe
        const propiedadExiste = await Property.findById(propiedadId);
        if (!propiedadExiste) {
            return res.status(404).json({ mensaje: 'Propiedad no encontrada' });
        }

        const visualizacion = new Visualization({
            propiedad: propiedadId,
            usuario: req.user ? req.user._id : null,
            tipoDispositivo,
            duracion,
            ip: req.ip
        });

        await visualizacion.save();
        res.status(201).json({ mensaje: 'Visualización registrada exitosamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al registrar visualización', error: error.message });
    }
};

// Obtener estadísticas de visualizaciones
const obtenerEstadisticas = async (req, res) => {
    try {
        const { fechaInicio, fechaFin } = req.query;
        
        const query = {};
        if (fechaInicio && fechaFin) {
            query.fecha = {
                $gte: new Date(fechaInicio),
                $lte: new Date(fechaFin)
            };
        }

        // Estadísticas generales
        const totalVisualizaciones = await Visualization.countDocuments(query);
        
        // Visualizaciones por dispositivo
        const porDispositivo = await Visualization.aggregate([
            { $match: query },
            {
                $group: {
                    _id: '$tipoDispositivo',
                    total: { $sum: 1 }
                }
            }
        ]);

        // Propiedades más vistas
        const propiedadesMasVistas = await Visualization.aggregate([
            { $match: query },
            {
                $group: {
                    _id: '$propiedad',
                    totalVistas: { $sum: 1 }
                }
            },
            { $sort: { totalVistas: -1 } },
            { $limit: 10 },
            {
                $lookup: {
                    from: 'properties',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'propiedadInfo'
                }
            },
            { $unwind: '$propiedadInfo' }
        ]);

        res.json({
            totalVisualizaciones,
            porDispositivo,
            propiedadesMasVistas
        });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener estadísticas', error: error.message });
    }
};

module.exports = {
    registrarVisualizacion,
    obtenerEstadisticas
};