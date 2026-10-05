import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Button from './components/index.components';

function App() {
  return(
    <>
      <div>
          <h1>Olá React</h1>

          <Button title="Entrar" />
          <Button title="Sair" />
      </div>
    </>
  );
}

export default App
