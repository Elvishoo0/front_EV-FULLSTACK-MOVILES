
const express = require("express");
const path = require("path");

// Importar las nuevas rutas
const productosRouter = require('./src/routes/productos');
const adminProductosRouter = require('./src/routes/adminProductos');
const pedidosRouter = require('./src/routes/pedidos');
const perfilRouter = require('./src/routes/perfil');
const adminUsuariosRouter = require('./src/routes/adminUsuarios');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para parsear JSON
app.use(express.json());

// Servir archivos estáticos de React
app.use(express.static(path.join(__dirname, "public")));

// Usar las rutas de la API
app.use('/api/productos', productosRouter);
app.use('/api/admin/productos', adminProductosRouter);
app.use('/api/pedidos', pedidosRouter);
app.use('/api/perfil', perfilRouter);
app.use('/api/admin/usuarios', adminUsuariosRouter);

// Para todas las demás rutas, servir el index.html de React (manejo de rutas de cliente)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
