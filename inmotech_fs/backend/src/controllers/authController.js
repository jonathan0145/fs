const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validar campos requeridos
        if (!email || !password) {
            return res.status(400).json({
                message: 'Email y contraseña son requeridos'
            });
        }

        // Buscar usuario
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({
                message: 'Credenciales inválidas'
            });
        }

        // Verificar contraseña
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({
                message: 'Credenciales inválidas'
            });
        }

        // Generar token
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                nombre: user.nombre
            }
        });
    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

exports.register = async (req, res) => {
    try {
        const { nombre, apellido, email, password } = req.body;
        
        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'El email ya está registrado' });
        }

        // Encriptar contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear nuevo usuario
        const user = await User.create({
            nombre,
            apellido,
            email,
            password: hashedPassword
        });

        // Generar token
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(201).json({
            token,
            user: {
                id: user.id,
                email: user.email,
                nombre: user.nombre
            }
        });
    } catch (error) {
        console.error('Error en registro:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};