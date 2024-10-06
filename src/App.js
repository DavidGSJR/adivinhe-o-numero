import React, { useState, useEffect } from 'react';
import './App.css';
import './styles/InputSection.css';
import Header from './Components/Header';
import InputSection from './Components/InputSection';

function App() {
  const [numeroSecreto, setNumeroSecreto] = useState(gerarNumeroAleatorio());
  const [tentativas, setTentativas] = useState(1);
  const [mensagem, setMensagem] = useState('Escolha um número entre 1 e 100');
  const [chute, setChute] = useState('');
  const [novoJogo, setNovoJogo] = useState(false);

  function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function verificarChute() {
    const numeroChutado = parseInt(chute, 10);
    if (numeroChutado === numeroSecreto) {
      setMensagem(`Acertou! Você descobriu o número secreto com ${tentativas} ${tentativas > 1 ? 'tentativas' : 'tentativa'}!`);
      setNovoJogo(true);
    } else if (numeroChutado > numeroSecreto) {
      setMensagem('O número secreto é menor');
      setTentativas(tentativas + 1);
    } else {
      setMensagem('O número secreto é maior');
      setTentativas(tentativas + 1);
    }
    setChute('');
  }

  function reiniciarJogo() {
    setNumeroSecreto(gerarNumeroAleatorio());
    setTentativas(1);
    setMensagem('Escolha um número entre 1 e 10');
    setChute('');
    setNovoJogo(false);
  }

  return (
    <div className="container__informacoes">
      <Header mensagem={mensagem} />
      <InputSection
        chute={chute}
        setChute={setChute}
        verificarChute={verificarChute}
        reiniciarJogo={reiniciarJogo}
        novoJogo={novoJogo}
      />
    </div>
  );
}

export default App;
