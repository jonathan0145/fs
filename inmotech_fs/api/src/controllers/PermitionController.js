const { Permition } = require('../models');

const PermitionController = {
  async obtenerTodos(req, res) {
    try {
      const permisos = await Permition.findAll();
      res.json(permisos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async obtenerPorId(req, res) {
    try {
      const permiso = await Permition.findByPk(req.params.id);
      if (permiso) {
        res.json(permiso);
      } else {
        res.status(404).json({ error: 'Permiso no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async crear(req, res) {
    try {
      const permiso = await Permition.create(req.body);
      res.status(201).json(permiso);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async actualizar(req, res) {
    try {
      const [actualizado] = await Permition.update(req.body, {
        where: { id: req.params.id }
      });
      if (actualizado) {
        const permisoActualizado = await Permition.findByPk(req.params.id);
        res.json(permisoActualizado);
      } else {
        res.status(404).json({ error: 'Permiso no encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async eliminar(req, res) {
    try {
      const eliminado = await Permition.destroy({
        where: { id: req.params.id }
      });
      if (eliminado) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Permiso no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = PermitionController;