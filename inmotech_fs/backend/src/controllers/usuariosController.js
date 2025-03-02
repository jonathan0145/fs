// // controllers/usuariosController.js
// const pool = require('../config/db');

// exports.getUsuarios = async (req, res, next) => {
//     try {
//         const [rows] = await pool.query('SELECT id FROM user');
//         res.json(rows);
//     } catch (error) {
//         next(error);
//     }
// };

// exports.createUsuario = async (req, res, next) => {
//     try {
//         const { User_user, User_password } = req.body; // Obtener los datos del cuerpo de la petición
//         const [result] = await pool.query(
//             'INSERT INTO user (User_user, User_password) VALUES (?, ?)',
//             [User_user, User_password] // Insertar los valores en la consulta
//         );
//         res.status(201).json({ id: result.insertId, User_user, User_password }); // Devolver el ID y los datos del usuario creado
//     } catch (error) {
//         next(error);
//     }
// };

// exports.updateUsuario = async (req, res, next) => {
//     try {
//         const { User_user, User_password } = req.body; // Obtener los datos del cuerpo de la petición
//         const [result] = await pool.query(
//             'UPDATE user SET User_user = ?, User_password = ? WHERE id = ?',
//             [User_user, User_password, req.params.id] // Actualizar los valores en la consulta
//         );
//         res.json({ message: 'Usuario actualizado', User_user, User_password }); // Devolver un mensaje y los datos actualizados
//     } catch (error) {
//         next(error);
//     }
// };

// exports.deleteUsuario = async (req, res, next) => {
//     try {
//         await pool.query('DELETE FROM user WHERE id = ?', [req.params.id]);
//         res.json({ message: 'Usuario eliminado' });
//     } catch (error) {
//         next(error);
//     }
// };

// controllers/usuariosController.js
const pool = require('../config/db');

exports.getUsuarios = async (req, res, next) => {
    try {
        const [rows] = await pool.query('SELECT id, User_user FROM user'); // Modificado para seleccionar id y User_user
        res.json(rows);
    } catch (error) {
        next(error);
    }
};

exports.createUsuario = async (req, res, next) => {
    try {
        const { User_user, User_password } = req.body;
        const [result] = await pool.query(
            'INSERT INTO user (User_user, User_password) VALUES (?, ?)',
            [User_user, User_password]
        );
        res.status(201).json({ id: result.insertId, User_user, User_password });
    } catch (error) {
        next(error);
    }
};

exports.updateUsuario = async (req, res, next) => {
    try {
        const { User_user, User_password } = req.body;
        const [result] = await pool.query(
            'UPDATE user SET User_user = ?, User_password = ? WHERE id = ?',
            [User_user, User_password, req.params.id]
        );
        res.json({ message: 'Usuario actualizado', User_user, User_password });
    } catch (error) {
        next(error);
    }
};

exports.deleteUsuario = async (req, res, next) => {
    try {
        await pool.query('DELETE FROM user WHERE id = ?', [req.params.id]);
        res.json({ message: 'Usuario eliminado' });
    } catch (error) {
        next(error);
    }
};