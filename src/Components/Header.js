import React from 'react';

function Header({ mensagem }) {
  return (
    <div className="container__texto">
      <h1>Adivinhe o <span className="container__texto-azul">número secreto</span></h1>
      <p className="texto__paragrafo">{mensagem}</p>
    </div>
  );
}

export default Header;
