const { Role } = require('../models');

const RoleController = {
  async obtenerTodos(req, res) {
    try {
      const roles = await Role.findAll();
      res.json(roles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async obtenerPorId(req, res) {
    try {
      const rol = await Role.findByPk(req.params.id);
      if (rol) {
        res.json(rol);
      } else {
        res.status(404).json({ error: 'Rol no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async crear(req, res) {
    try {
      const rol = await Role.create(req.body);
      res.status(201).json(rol);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async actualizar(req, res) {
    try {
      const [actualizado] = await Role.update(req.body, {
        where: { id: req.params.id }
      });
      if (actualizado) {
        const rolActualizado = await Role.findByPk(req.params.id);
        res.json(rolActualizado);
      } else {
        res.status(404).json({ error: 'Rol no encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async eliminar(req, res) {
    try {
      const eliminado = await Role.destroy({
        where: { id: req.params.id }
      });
      if (eliminado) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Rol no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = RoleController;