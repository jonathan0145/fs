// app.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();

// Middleware
// Actualizar la configuración CORS
app.use(cors({
    origin: 'http://localhost:8080', // Puerto donde corre tu frontend con webpack
    credentials: true
}));
app.use(express.json());

// Rutas
app.use('/auth', authRoutes);

// Manejo de errores
app.use(errorHandler);

// Sincronizar base de datos
sequelize.sync()
    .then(() => {
        console.log('Base de datos sincronizada');
    })
    .catch(err => {
        console.error('Error al sincronizar la base de datos:', err);
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});

// Agregar ruta de prueba
app.get('/api/test', (req, res) => {
    res.json({ message: 'Conexión exitosa con el backend' });
});