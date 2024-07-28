const express = require("express");
const router = express.Router();

// Ejemplo de parcelas
const parcelas = [
  { _id: "1", ubicacion: "10.123, -75.123", tamano: "2 hectáreas" },
  { _id: "2", ubicacion: "10.124, -75.124", tamano: "3 hectáreas" },
];

router.get("/", (req, res) => {
  res.json(parcelas);
});

module.exports = router;
