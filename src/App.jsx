import { useEffect, useState } from 'react'
import './App.css'
//import Form from './components/Form'
//import GPT from './components/GPT'
//import { useFetch } from './useFetch'
const ENDPOINT1 = 'https://roy-production.up.railway.app'
const ENDPOINT2 = 'https://roy-production.up.railway.app/api/resp'

function App() {
  //const { data } = useFetch("http://localhost:/")
  const [mensaje, setMensaje] = useState('')
  const [pregunta, setPregunta] = useState('')
  const [respuesta, setRespuesta] = useState('');
  const [error, setError] = useState('');

  useEffect(()=>{
    
    fetch(ENDPOINT1)
    .then(res=>res.json())
    .then(data=>setMensaje(data.message))
    .catch(error => {setError(error.message);
      console.error(error);
    });
  },[]);

  const handleChangue = (event)=>{
    setPregunta(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); 

      fetch(ENDPOINT2,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({pregunta:pregunta})
      })
      .then(res=>res.json())
      .then(data=>setRespuesta(data.resp))
      .catch(error => console.log(error));
      console.log('Datos enviados: ', pregunta);
      setPregunta('');
    };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>Consulta a la Api de Chat-gpt desde node</h1>
      <h3>
      <label>
      Pregunte:
        <input type="text" value={pregunta} onChange={handleChangue} />
      </label>
      </h3>
      <button type="submit">Enviar</button>
    </form>
    <p>{mensaje}</p>
    <h3>{respuesta}</h3>
    {error && <p>{error}</p>}
    </>
  )
  }

export default App
