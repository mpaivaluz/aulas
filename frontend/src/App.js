import React from 'react';
import './App.css';

import logo from './assets/logo.svg';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC"/>

      <div className="content">
        <p>
          Ofereca os melhores <strong>precos</strong> ao seus clientes
        </p>
        <form>
          <label htmlFor="email">E-MAIL *</label>
          <input 
          type="email" 
          id="email" 
          placeholder="Seu melhor e-mail" 
          />

          <button className="btn" type="submit" >Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
