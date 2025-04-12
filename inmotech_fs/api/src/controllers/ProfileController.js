const { Profile } = require('../models');

const ProfileController = {
  async obtenerTodos(req, res) {
    try {
      const perfiles = await Profile.findAll();
      res.json(perfiles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async obtenerPorId(req, res) {
    try {
      const perfil = await Profile.findByPk(req.params.id);
      if (perfil) {
        res.json(perfil);
      } else {
        res.status(404).json({ error: 'Perfil no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async crear(req, res) {
    try {
      const perfil = await Profile.create(req.body);
      res.status(201).json(perfil);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async actualizar(req, res) {
    try {
      const [actualizado] = await Profile.update(req.body, {
        where: { id: req.params.id }
      });
      if (actualizado) {
        const perfilActualizado = await Profile.findByPk(req.params.id);
        res.json(perfilActualizado);
      } else {
        res.status(404).json({ error: 'Perfil no encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async eliminar(req, res) {
    try {
      const eliminado = await Profile.destroy({
        where: { id: req.params.id }
      });
      if (eliminado) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Perfil no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = ProfileController;