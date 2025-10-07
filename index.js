const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Servir archivos estáticos de React
app.use(express.static(path.join(__dirname, "public")));

// Para rutas de React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
  