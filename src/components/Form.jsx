import React, { useState, useEffect } from 'react';
import GPT from './GPT.jsx';

function Formulario() {
  const [preguntaForm, setPreguntaForm] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Datos enviados: ', preguntaForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={preguntaForm} onChange={(event) => setPreguntaForm(event.target.value)} />
      </label>
      <button type="submit">Enviar</button>
      <GPT/>
    </form>
  );
}

export default Formulario;