import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Criptomoneda from './Criptomoneda';


function Formulario() {

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
return(
    <form action="">
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
    </form>
  )
}

export default Formulario;