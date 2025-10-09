
const express = require('express');
const router = express.Router();

// GET /api/productos - Obtener todos los productos
router.get('/', (req, res) => {
  // Lógica para obtener productos de la base de datos
  res.json({ message: 'Obteniendo todos los productos' });
});

// GET /api/productos/:id - Obtener un producto por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  // Lógica para obtener un producto por ID
  res.json({ message: `Obteniendo producto con ID: ${id}` });
});

module.exports = router;
