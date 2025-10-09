
const express = require('express');
const router = express.Router();

// GET /api/perfil/:usuarioId - Ver perfil
router.get('/:usuarioId', (req, res) => {
  const { usuarioId } = req.params;
  res.json({ message: `Viendo perfil del usuario con ID: ${usuarioId}` });
});

// PUT /api/perfil/:usuarioId - Actualizar perfil
router.put('/:usuarioId', (req, res) => {
  const { usuarioId } = req.params;
  res.json({ message: `Perfil del usuario con ID: ${usuarioId} actualizado` });
});

module.exports = router;
