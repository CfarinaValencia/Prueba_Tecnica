const mongoose = require('mongoose');

const ParcelaSchema = new mongoose.Schema({
  ubicacion: {
    latitud: {
      type: Number,
      required: true
    },
    longitud: {
      type: Number,
      required: true
    }
  },
  tamaño: {
    type: Number,
    required: true
  },
  tipo_cultivo: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Parcela', ParcelaSchema);
