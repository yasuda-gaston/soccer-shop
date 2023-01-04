import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './container/ItemDetailContainer';
import ItemListContainer from './container/ItemListContainer';

function App() {

  return (
    <div className="App">

      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a Wakaba Soccer Shop'} />
      <ItemDetailContainer />


    </div>
  );
}

export default App;
