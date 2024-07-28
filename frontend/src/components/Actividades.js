import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Actividades = () => {
  const [actividades, setActividades] = useState([]);
  
  useEffect(() => {
    axios.get('/api/actividades')
      .then(response => setActividades(response.data))
      .catch(error => console.error('Error fetching actividades:', error));
  }, []);

  return (
    <div>
      <h1>Actividades Agronómicas</h1>
      <ul>
        {actividades.map(actividad => (
          <li key={actividad._id}>
            {actividad.tipo} - {actividad.fecha} - {actividad.insumos} - {actividad.duracion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Actividades;
