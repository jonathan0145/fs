const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
    try {
        console.log('Recibida petición de login:', req.body);
        const { User_user, User_password } = req.body;

        if (!User_user || !User_password) {
            console.log('Faltan datos requeridos en login');
            return res.status(400).json({ message: 'Usuario y contraseña son requeridos' });
        }
        
        // Buscar usuario
        const usuario = await Usuario.findOne({ where: { User_user } });
        console.log('Usuario encontrado:', usuario ? 'Sí' : 'No');
        
        if (!usuario) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }

        // Verificar contraseña
        const validPassword = await bcrypt.compare(User_password, usuario.User_password);
        console.log('Contraseña válida:', validPassword ? 'Sí' : 'No');
        
        if (!validPassword) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        // Generar token
        const token = jwt.sign(
            { id: usuario.id, username: usuario.User_user },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '24h' }
        );

        console.log('Login exitoso para usuario:', User_user);
        res.json({
            token,
            user: {
                id: usuario.id,
                username: usuario.User_user
            }
        });
    } catch (error) {
        console.error('Error detallado en login:', error);
        res.status(500).json({ 
            message: 'Error en el servidor',
            error: error.message 
        });
    }
};

exports.register = async (req, res) => {
    try {
        console.log('Recibida petición de registro:', req.body);
        const { User_user, User_password } = req.body;

        if (!User_user || !User_password) {
            console.log('Faltan datos requeridos');
            return res.status(400).json({ message: 'Usuario y contraseña son requeridos' });
        }

        // Verificar si el usuario ya existe
        const existingUser = await Usuario.findOne({ where: { User_user } });
        if (existingUser) {
            console.log('Usuario ya existe:', User_user);
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(User_password, 10);
        
        // Crear nuevo usuario
        const usuario = await Usuario.create({
            User_user,
            User_password: hashedPassword
        });

        console.log('Usuario creado exitosamente:', usuario.id);
        res.status(201).json({ 
            message: 'Usuario registrado exitosamente',
            user: {
                id: usuario.id,
                username: usuario.User_user
            }
        });
    } catch (error) {
        console.error('Error detallado en registro:', error);
        res.status(500).json({ 
            message: 'Error en el servidor',
            error: error.message 
        });
    }
}; 