const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, 'El título es requerido'],
        trim: true
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es requerida']
    },
    precio: {
        type: Number,
        required: [true, 'El precio es requerido']
    },
    ubicacion: {
        type: String,
        required: [true, 'La ubicación es requerida']
    },
    habitaciones: {
        type: Number,
        required: true
    },
    banos: {
        type: Number,
        required: true
    },
    area: {
        type: Number,
        required: true
    },
    garajes: {
        type: Number,
        default: 0
    },
    tipoPropiedad: {
        type: String,
        required: true,
        enum: ['Casa', 'Apartamento', 'Local', 'Oficina', 'Terreno']
    },
    estado: {
        type: String,
        enum: ['Disponible', 'Vendido', 'Reservado'],
        default: 'Disponible'
    },
    imagen: {
        type: String,
        required: [true, 'La imagen es requerida']
    },
    caracteristicas: [{
        type: String
    }],
    creador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    fechaPublicacion: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Property', propertySchema);