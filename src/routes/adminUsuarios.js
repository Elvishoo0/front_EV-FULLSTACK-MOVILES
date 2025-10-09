
const express = require('express');
const router = express.Router();

// GET /api/admin/usuarios - Obtener todos los usuarios
router.get('/', (req, res) => {
  res.json({ message: 'Obteniendo todos los usuarios' });
});

// POST /api/admin/usuarios - Crear un nuevo usuario
router.post('/', (req, res) => {
  res.status(201).json({ message: 'Usuario creado' });
});

// GET /api/admin/usuarios/:id - Obtener un usuario por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Obteniendo usuario con ID: ${id}` });
});

// PUT /api/admin/usuarios/:id - Actualizar un usuario por ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Usuario con ID: ${id} actualizado` });
});

// DELETE /api/admin/usuarios/:id - Eliminar un usuario por ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.status(204).send();
});

module.exports = router;
