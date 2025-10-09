
const express = require('express');
const router = express.Router();

// POST /api/admin/productos - Crear un nuevo producto
router.post('/', (req, res) => {
  res.status(201).json({ message: 'Producto creado' });
});

// PUT /api/admin/productos/:id - Actualizar un producto
router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Producto con ID: ${id} actualizado` });
});

// DELETE /api/admin/productos/:id - Eliminar un producto
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.status(204).send();
});

module.exports = router;
