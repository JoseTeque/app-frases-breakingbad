import React, {useState , useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './Frase'



const Contenedor = styled.div`
  display:flex;
  align-items:center;
  padding-top:4rem;
  flex-direction:column;
`;


const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top:3rem;
  padding:1rem 3rem;
  font-size:2rem;
  border:2px solid black;

  &:hover{
    cursor: pointer;
  }
`;

function App() {

  const [frase, setfrase] = useState({})

  const consultarApi = async() => {
    const respuesta = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const resultado = await respuesta.json();
    const frase = resultado[0];
    setfrase(frase);
  }

  useEffect(() => {
   
    consultarApi();
   
  }, [])




  return (
    <Contenedor>

        <Frase
          frase = {frase}
        />
        <Boton
          onClick={consultarApi}
        >
            Obtener Frase
        </Boton>
    </Contenedor>
      
  );
}

export default App;
