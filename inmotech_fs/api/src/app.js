const express = require('express');
const sequelize = require('../config/database');
const defineRelationships = require('./models/relationships');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const morgan = require('morgan');
const moduleRoutes = require('./routes/moduleRoutes');
const permitionRoutes = require('./routes/permitionRoutes');
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const profileRoutes = require('./routes/profileRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Define las relaciones
defineRelationships();

// Sincroniza la base de datos
sequelize.sync()
    .then(() => {
        console.log('Base de datos sincronizada');
    })
    .catch(err => {
        console.error('Error al sincronizar la base de datos:', err);
    });

// Seguridad básica
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100 // límite de 100 peticiones por ventana
});
app.use(limiter);

// CORS configurado
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:8080',
    credentials: true
}));
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/modules', moduleRoutes);
app.use('/api/permissions', permitionRoutes);
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/profiles', profileRoutes);

// Error Handler
app.use(errorHandler);

module.exports = app;