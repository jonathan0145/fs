// server.js
const app = require('./src/app');
require('dotenv').config();

const PORT = process.env.PORT || 3001;  // Cambiado a 3001

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});