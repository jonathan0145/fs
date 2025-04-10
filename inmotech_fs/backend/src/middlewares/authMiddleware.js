const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
        // Obtener el token del header
        const token = req.headers.authorization?.split(' ')[1];
        
        if (!token) {
            return res.status(401).json({ message: 'No se proporcionó token de autenticación' });
        }

        // Verificar el token
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        
        // Agregar el usuario decodificado a la request
        req.user = decoded;
        
        next();
    } catch (error) {
        console.error('Error en autenticación:', error);
        res.status(401).json({ message: 'Token inválido o expirado' });
    }
};

module.exports = authMiddleware; 