const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);

        if (!user) {
            throw new Error();
        }

        req.token = token;
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ mensaje: 'Por favor autentíquese' });
    }
};

const esAdmin = async (req, res, next) => {
    if (req.user.rol !== 'admin') {
        return res.status(403).json({ mensaje: 'Acceso denegado' });
    }
    next();
};

module.exports = { auth, esAdmin };