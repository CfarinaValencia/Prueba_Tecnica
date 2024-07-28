const express = require("express");
const router = express.Router();

// Ejemplo de actividades
const actividades = [
  { _id: "1", tipo: "Siembra", fecha: "2024-07-27" },
  { _id: "2", tipo: "Riego", fecha: "2024-07-28" },
];

router.get("/", (req, res) => {
  res.json(actividades);
});

module.exports = router;
