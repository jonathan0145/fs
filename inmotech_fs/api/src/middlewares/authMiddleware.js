const jwt = require('jsonwebtoken');
const { User, Role, Permition } = require('../models');

const authMiddleware = {
  verifyToken: (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(403).json({ error: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to authenticate token' });
      }
      req.userId = decoded.id;
      next();
    });
  },

  checkRole: (requiredRole) => {
    return async (req, res, next) => {
      try {
        const user = await User.findByPk(req.userId, {
          include: [Role]
        });

        if (!user || user.Role.nombre !== requiredRole) {
          return res.status(403).json({ error: 'Insufficient permissions' });
        }

        next();
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
  }
};

module.exports = authMiddleware;