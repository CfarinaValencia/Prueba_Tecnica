import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Parcelas = () => {
  const [parcelas, setParcelas] = useState([]);
  
  useEffect(() => {
    axios.get('/api/parcelas')
      .then(response => setParcelas(response.data))
      .catch(error => console.error('Error fetching parcelas:', error));
  }, []);

  return (
    <div>
      <h1>Parcelas de la Finca</h1>
      <ul>
        {parcelas.map(parcela => (
          <li key={parcela._id}>
            {parcela.tipoCultivo} - {parcela.ubicacion.latitud}, {parcela.ubicacion.longitud} - {parcela.tamano}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Parcelas;
