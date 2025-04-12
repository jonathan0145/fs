const User = require('../models/User');
const jwt = require('jsonwebtoken');

const registro = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '24h'
        });

        res.status(201).json({
            mensaje: 'Usuario registrado exitosamente',
            token,
            usuario: {
                id: user._id,
                nombre: user.nombre,
                email: user.email,
                rol: user.rol
            }
        });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al registrar usuario', error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await user.compararPassword(password))) {
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '24h'
        });

        res.json({
            mensaje: 'Login exitoso',
            token,
            usuario: {
                id: user._id,
                nombre: user.nombre,
                email: user.email,
                rol: user.rol
            }
        });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor', error: error.message });
    }
};

const perfil = async (req, res) => {
    try {
        res.json({
            usuario: {
                id: req.user._id,
                nombre: req.user.nombre,
                email: req.user.email,
                rol: req.user.rol
            }
        });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener perfil', error: error.message });
    }
};

module.exports = {
    registro,
    login,
    perfil
};