
const express = require('express');
const router = express.Router();

// POST /api/pedidos - Crear un nuevo pedido
router.post('/', (req, res) => {
  res.status(201).json({ message: 'Pedido creado' });
});

// GET /api/pedidos/:pedidoId - Ver un pedido específico
router.get('/:pedidoId', (req, res) => {
  const { pedidoId } = req.params;
  res.json({ message: `Viendo pedido con ID: ${pedidoId}` });
});

// GET /api/pedidos/usuario/:usuarioId - Ver historial de pedidos de un usuario
router.get('/usuario/:usuarioId', (req, res) => {
  const { usuarioId } = req.params;
  res.json({ message: `Viendo pedidos del usuario con ID: ${usuarioId}` });
});

module.exports = router;
