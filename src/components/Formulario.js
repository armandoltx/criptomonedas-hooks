import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Formulario() {

  //State
  const [criptomonedas, guardarCripotomonedas] = useState([]); // es un arreglo, porque lo q retorna de la Api es un array

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
        <select name="" id="" className='u-full-width'>
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
        <select name="" id="" className='u-full-width'></select>
      </div>
    </form>
  )
}

export default Formulario;