const { UserStatus } = require('../models');

const UserStatusController = {
  async obtenerTodos(req, res) {
    try {
      const estados = await UserStatus.findAll();
      res.json(estados);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async obtenerPorId(req, res) {
    try {
      const estado = await UserStatus.findByPk(req.params.id);
      if (estado) {
        res.json(estado);
      } else {
        res.status(404).json({ error: 'Estado de usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async crear(req, res) {
    try {
      const estado = await UserStatus.create(req.body);
      res.status(201).json(estado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async actualizar(req, res) {
    try {
      const [actualizado] = await UserStatus.update(req.body, {
        where: { id: req.params.id }
      });
      if (actualizado) {
        const estadoActualizado = await UserStatus.findByPk(req.params.id);
        res.json(estadoActualizado);
      } else {
        res.status(404).json({ error: 'Estado de usuario no encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async eliminar(req, res) {
    try {
      const eliminado = await UserStatus.destroy({
        where: { id: req.params.id }
      });
      if (eliminado) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Estado de usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = UserStatusController;