const { Module, ModuleRole, Role, Permition, PermitionsModuleRole } = require('../models');

const ModuleController = {
  async obtenerTodos(req, res) {
    try {
      const modulos = await Module.findAll();
      res.json(modulos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async obtenerPorId(req, res) {
    try {
      const modulo = await Module.findByPk(req.params.id);
      if (modulo) {
        res.json(modulo);
      } else {
        res.status(404).json({ error: 'Módulo no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async crear(req, res) {
    try {
      const modulo = await Module.create(req.body);
      res.status(201).json(modulo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async actualizar(req, res) {
    try {
      const [actualizado] = await Module.update(req.body, {
        where: { id: req.params.id }
      });
      if (actualizado) {
        const moduloActualizado = await Module.findByPk(req.params.id);
        res.json(moduloActualizado);
      } else {
        res.status(404).json({ error: 'Módulo no encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async eliminar(req, res) {
    try {
      const eliminado = await Module.destroy({
        where: { id: req.params.id }
      });
      if (eliminado) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Módulo no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async asignarRol(req, res) {
    try {
      const { moduleId, roleId } = req.body;
      await ModuleRole.create({ module_fk: moduleId, role_fk: roleId });
      res.status(201).json({ message: 'Rol asignado al módulo exitosamente' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async obtenerRoles(req, res) {
    try {
      const { moduleId } = req.params;
      const roles = await ModuleRole.findAll({
        where: { module_fk: moduleId },
        include: [Role]
      });
      res.json(roles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async eliminarRol(req, res) {
    try {
      const { moduleId, roleId } = req.body;
      await ModuleRole.destroy({ where: { module_fk: moduleId, role_fk: roleId } });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async asignarPermiso(req, res) {
    try {
      const { moduleRoleId, permitionId } = req.body;
      await PermitionsModuleRole.create({ module_role_fk: moduleRoleId, permitions_fk: permitionId });
      res.status(201).json({ message: 'Permiso asignado al módulo-rol exitosamente' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async obtenerPermisos(req, res) {
    try {
      const { moduleRoleId } = req.params;
      const permisos = await PermitionsModuleRole.findAll({
        where: { module_role_fk: moduleRoleId },
        include: [Permition]
      });
      res.json(permisos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async eliminarPermiso(req, res) {
    try {
      const { moduleRoleId, permitionId } = req.body;
      await PermitionsModuleRole.destroy({ where: { module_role_fk: moduleRoleId, permitions_fk: permitionId } });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = ModuleController;