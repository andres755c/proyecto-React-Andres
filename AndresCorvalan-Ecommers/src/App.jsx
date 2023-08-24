import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar'
import SubTitulo from './componentes/SubTitulo/SubTitulo'
import Titulo from './componentes/Titulo/Titulo'
import CardWidget from './componentes/CartWidget/CartWidget';
import ItemListerContainer from './componentes/ItemListerContainer/ItemListerContainer';

function Footer() {
  return <footer>
    <SubTitulo subtitulo='Derechos de autor'/>
  <h3>Nuestras Redes</h3>
  <a href=''>intagram </a>
  <a href=''>Facebook </a>
  <a href=''>Youtube </a>
  <a href=''>Telegram </a>
</footer>
}

function App() {

  return (
    <div>
      <Titulo />
      <SubTitulo />
      <NavBar />
      <ItemListerContainer />
      <Footer />
    </div>
  )
}

export default App