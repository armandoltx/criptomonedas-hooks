import React, {useState, useEffect} from 'react';
import axios from 'axios';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';
import Spinner from './components/Spinner';
import Cotizacion from './components/Cotizacion';

function App() {
  // state para traernos los valores de la moneda y la criptomoneda al componenete principal
  const [ moneda, guardarMoneda ] = useState('');
  const [ criptomoneda, guardarCriptomoneda ] = useState();
  // anadimos otro state para el spinner
  const [ cargando, guardarCargando ] = useState(false);
  const [ resultado, guardarResultado ] = useState({});

  // pedriamos crear una funcion para pasar guardarMoneda y guardarCriptomoneda al compoenente formulario, pero lo podemos pasar directamente y hacer destructuring en el componente formulario

  useEffect(
    () => {
      // para que no se ejecute inmediatamente al iniciar la web si no hay moneda, q no se ejecute
      if(moneda === '' || criptomoneda === '') return;

      const cotizarCriptoMoneda = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

        const resultado = await axios.get(url);
        console.log("resulado ", resultado.data.DISPLAY[criptomoneda][moneda]);

        // cuando hacemos la consulta que se vea el spinner
        guardarCargando(true);

        // ocultamos el spinner y agregamos los datos de la busqueda al resultado
        setTimeout(
          () => {
            guardarCargando(false);
            guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
          }, 3000);
      }

      cotizarCriptoMoneda();

    }, [criptomoneda, moneda]
  );

  // Mostrar el spinner o el resultado
  const componente = (cargando) ? <Spinner /> : <Cotizacion resultado={resultado}/>;

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

          {componente}
        </div>
      </div>
    </div>
  );
}

export default App;
