import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Criptomoneda from './Criptomoneda';
import Error from './Error'


function Formulario({ guardarMoneda, guardarCriptomoneda }) {

  //State
  const [criptomonedas, guardarCripotomonedas] = useState([]); // es un arreglo, porque lo q retorna de la Api es un array

  // antes de enviar la peticion del usuario de lo q el usuario quiere cotizar, tenemos q poner esas peticiones en el state y tb poderlas validar
  const [monedaCotizar, guardaraMonedaCotizar] = useState('');
  const [criptoCotizar, guardarCriptoCotiar] = useState('');
  const [error, guardarError] = useState(false);

  const consultarAPI = async () => {
    const url = 'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=AUD'

    const resultado = await axios(url);

    console.log('resultado ', resultado.data.Data);

    // colocar respuesta en el state
    guardarCripotomonedas(resultado.data.Data);
  }
  // ahora podemos hacer console.log(criptomonedas), tiene q ser el mismo valor q en resutaldo
  console.log('criptomonedas ', criptomonedas);

  useEffect(
    () => {
      consultarAPI();
    },[]
  );

  // Validar que el usuario llene ambos campos
  const cotizarMoneda = (e) => {
    e.preventDefault();

    // consultar que ambos campos esten completos
    if (monedaCotizar === '' || criptoCotizar === '') {
      guardarError(true);
      return
    }


    ////// pasar al componente principal
    // primero ponemos el error como false
    // ahora anadimos las funiones de cambio de state q hemos definido en app y estamos pasando como props
    guardarError(false);
    guardarMoneda(monedaCotizar);
    guardarCriptomoneda(criptoCotizar);

  }

  // Mostrar el error en caso de que esxista
  //console.log("error ", error);
  const componenteError = (error) ? <Error mensaje="Ambos Campos son Obligatorios" /> : null;

  return(
    <form
      action=""
      onSubmit={cotizarMoneda}
    >
      {componenteError}
      <div className="row">
        <label htmlFor="">Elige tu moneda</label>
        <select
          className='u-full-width'
          onChange={(e) => {guardaraMonedaCotizar(e.target.value)}}
        >
          <option value="">-- Elige Tu Moneda --</option>
          <option value="USD">Dolar Estadounidense</option>
          <option value="MXN">Peso Mexicano</option>
          <option value="EUR">Euros</option>
          <option value="GBP">Libras</option>
          <option value="AUD">Dolar Australiano</option>
        </select>
      </div>
      <div className="row">
        <label htmlFor="">Elige tu Criptomoneda</label>
        <select
          className='u-full-width'
        onChange={(e) => { guardarCriptoCotiar(e.target.value) }}
        >
        <option value="">-- Elige Tu CriptoMoneda --</option>
          { criptomonedas.map( cripto => (
              <Criptomoneda
                key={cripto.CoinInfo.Id}
                criptomoneda={cripto}
              />
          )) }
        </select>
      </div>

      <input type="submit" className="button-primary u-full-width" value="Calcular"/>
    </form>
  )
}

export default Formulario;