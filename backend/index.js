const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/agronomicas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/actividades', require('./routes/actividades'));
app.use('/api/parcelas', require('./routes/parcelas'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
