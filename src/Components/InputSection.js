import React from 'react';

function InputSection({ chute, setChute, verificarChute, reiniciarJogo, novoJogo }) {
  function handleChange(event) {
    setChute(event.target.value);
  }

  return (
    <div className="input-section">
      <input
        type="number"
        min="1"
        max="10"
        value={chute}
        onChange={handleChange}
        className="container__input"
        disabled={novoJogo}
      />
      <div className="chute container__botoes">
        <button onClick={verificarChute} className="container__botao" disabled={novoJogo || !chute}>
          Chutar
        </button>
        <button onClick={reiniciarJogo} className="container__botao" disabled={!novoJogo}>
          Novo jogo
        </button>
      </div>
    </div>
  );
}

export default InputSection;
