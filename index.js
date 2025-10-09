const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Servir archivos estáticos de la carpeta 'public'
// Esta carpeta debería contener el build de producción de tu aplicación de React.
app.use(express.static(path.join(__dirname, "public")));

// El handler "catch-all": para cualquier petición que no coincida con un archivo estático,
// devuelve el index.html. Esto es clave para que el routing del lado del cliente (React Router) funcione correctamente.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor de Frontend escuchando en http://localhost:${PORT}`);
});
