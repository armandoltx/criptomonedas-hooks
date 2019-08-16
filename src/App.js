import React, {useState, useEffect} from 'react';
import axios from 'axios';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';

function App() {
  // state para traernos los valores de la moneda y la criptomoneda al componenete principal
  const [ moneda, guardarMoneda ] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState();

  // pedriamos crear una funcion para pasar guardarMoneda y guardarCriptomoneda al compoenente formulario, pero lo podemos pasar directamente y hacer destructuring en el componente formulario

  useEffect(
    () => {
      const cotizarCriptoMoneda = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

        const resultado = await axios.get(url);
        console.log("resulado ", resultado);
      }

      cotizarCriptoMoneda();

    }, [criptomoneda, moneda]
  );

  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={imagen} alt="imagen criptomonedas" className="logotipo" />
        </div>
        <div className="one-half column">
          <h1>Cotiza Criptomonedas al Instante</h1>
          <Formulario
            guardarMoneda={guardarMoneda}
            guardarCriptomoneda={guardarCriptomoneda}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
