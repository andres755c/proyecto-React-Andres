import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar'
import SubTitulo from './componentes/SubTitulo/SubTitulo'
import Titulo from './componentes/Titulo/Titulo'
import CardWidget from './componentes/CartWidget/CartWidget';
import ItemListerContainer from './componentes/ItemListerContainer/ItemListerContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './componentes/CartContainer/CartContainer';


function Footer() {
  return <footer>
    <SubTitulo subtitulo='Derechos de autor'/>
  <h3>Nuestras Redes</h3>
  <a className='redesSociales' href='https://www.instagram.com/andres755c/' target="_blank">Intagram </a>
  <a className='redesSociales' href=''>Facebook </a>
  <a className='redesSociales' href=''>Youtube </a>
  <a className='redesSociales' href=''>Telegram </a>
</footer>
}

function App() {

  const onAdd = (count) => {
    console.log('Cantidad de productos seleccionados al carrito: ' + count)
  }

  return (
    <Router>
        <Titulo />
        <NavBar />
      <Routes>
        <Route path='/' element={<ItemListerContainer /> } />
        <Route path='/category/:cid' element={<ItemListerContainer /> } />
        <Route path='/detalle' element={<ItemDetailContainer /> } />
        <Route path='/' element={<ItemCount inicial={1} stock={5} onAdd={onAdd} /> } />
        <Route path='/cart' element={<CartContainer /> } />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App