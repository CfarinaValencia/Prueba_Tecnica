import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [actividades, setActividades] = useState([]);
  const [parcelas, setParcelas] = useState([]);

  useEffect(() => {
    fetch('/api/actividades')
      .then(response => response.json())
      .then(data => setActividades(data))
      .catch(error => console.error('Error fetching actividades:', error));

    fetch('/api/parcelas')
      .then(response => response.json())
      .then(data => setParcelas(data))
      .catch(error => console.error('Error fetching parcelas:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Monitoreo de Actividades Agronómicas</h1>
      </header>
      <main>
        <section>
          <h2>Actividades</h2>
          <ul>
            {actividades.map(actividad => (
              <li key={actividad._id}>{actividad.tipo} - {actividad.fecha}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Parcelas</h2>
          <ul>
            {parcelas.map(parcela => (
              <li key={parcela._id}>{parcela.ubicacion} - {parcela.tamano}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
