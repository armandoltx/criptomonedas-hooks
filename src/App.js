import React from 'react';
import imagen from './cryptomonedas.png';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={imagen} alt="imagen criptomonedas" className="logotipo" />
        </div>
        <div className="one-half column">
        </div>
      </div>
    </div>
  );
}

export default App;
