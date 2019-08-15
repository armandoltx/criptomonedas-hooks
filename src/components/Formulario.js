import React from 'react';


function Formulario() {
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