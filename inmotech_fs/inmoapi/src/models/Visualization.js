const mongoose = require('mongoose');

const visualizationSchema = new mongoose.Schema({
    propiedad: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property',
        required: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    tipoDispositivo: {
        type: String,
        enum: ['desktop', 'mobile', 'tablet'],
        required: true
    },
    duracion: {
        type: Number,
        default: 0
    },
    ip: {
        type: String
    }
});

module.exports = mongoose.model('Visualization', visualizationSchema);