import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './container/ItemDetailContainer';
import ItemListContainer from './container/ItemListContainer';
import ShopProvider from './context/ShopProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemCartContainer from './container/ItemCartContainer/ItemCartContainer';
import Footer from './components/Footer';

function App() {

  return (

    <ShopProvider>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a Wakaba Soccer Shop'} />} />
          <Route path='*' element={<h2>RUTA NO ENCONTRADA</h2>} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<ItemCartContainer />} />
        </Routes>

        <Footer />


      </BrowserRouter>
    </ShopProvider>

  );
}

export default App;
