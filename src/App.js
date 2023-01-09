import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './container/ItemDetailContainer';
import ItemListContainer from './container/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <div className="App">

        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a Wakaba Soccer Shop'} />} />
          <Route path='*' element={<h2>RUTA NO ENCONTRADA</h2>} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:id' element={<ItemDetailContainer />} />


        </Routes>



      </div>
    </BrowserRouter>
  );
}

export default App;
