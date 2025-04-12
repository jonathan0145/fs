const Property = require('../models/Property');

// Crear nueva propiedad
const crearPropiedad = async (req, res) => {
    try {
        const propiedad = new Property({
            ...req.body,
            creador: req.user._id
        });
        await propiedad.save();
        res.status(201).json({ mensaje: 'Propiedad creada exitosamente', propiedad });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear propiedad', error: error.message });
    }
};

// Obtener todas las propiedades
const obtenerPropiedades = async (req, res) => {
    try {
        const { page = 1, limit = 10, busqueda = '', tipoPropiedad = '' } = req.query;
        const query = {};

        if (busqueda) {
            query.$or = [
                { titulo: { $regex: busqueda, $options: 'i' } },
                { ubicacion: { $regex: busqueda, $options: 'i' } }
            ];
        }

        if (tipoPropiedad) {
            query.tipoPropiedad = tipoPropiedad;
        }

        const propiedades = await Property.find(query)
            .populate('creador', 'nombre')
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .sort({ fechaPublicacion: -1 });

        const total = await Property.countDocuments(query);

        res.json({
            propiedades,
            totalPaginas: Math.ceil(total / limit),
            paginaActual: page,
            total
        });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener propiedades', error: error.message });
    }
};

// Obtener una propiedad específica
const obtenerPropiedad = async (req, res) => {
    try {
        const propiedad = await Property.findById(req.params.id)
            .populate('creador', 'nombre');
        
        if (!propiedad) {
            return res.status(404).json({ mensaje: 'Propiedad no encontrada' });
        }
        
        res.json(propiedad);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener propiedad', error: error.message });
    }
};

// Actualizar propiedad
const actualizarPropiedad = async (req, res) => {
    try {
        const propiedad = await Property.findById(req.params.id);
        
        if (!propiedad) {
            return res.status(404).json({ mensaje: 'Propiedad no encontrada' });
        }

        if (propiedad.creador.toString() !== req.user._id.toString() && req.user.rol !== 'admin') {
            return res.status(403).json({ mensaje: 'No autorizado para editar esta propiedad' });
        }

        const propiedadActualizada = await Property.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({ mensaje: 'Propiedad actualizada exitosamente', propiedad: propiedadActualizada });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar propiedad', error: error.message });
    }
};

// Eliminar propiedad
const eliminarPropiedad = async (req, res) => {
    try {
        const propiedad = await Property.findById(req.params.id);
        
        if (!propiedad) {
            return res.status(404).json({ mensaje: 'Propiedad no encontrada' });
        }

        if (propiedad.creador.toString() !== req.user._id.toString() && req.user.rol !== 'admin') {
            return res.status(403).json({ mensaje: 'No autorizado para eliminar esta propiedad' });
        }

        await propiedad.remove();
        res.json({ mensaje: 'Propiedad eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar propiedad', error: error.message });
    }
};

module.exports = {
    crearPropiedad,
    obtenerPropiedades,
    obtenerPropiedad,
    actualizarPropiedad,
    eliminarPropiedad
};