import React from 'react';
import './App.css';
import Counter from './components/Counter';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {

  return (
    <div className="App">

      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a Wakaba Soccer Shop'} />
      <Counter />

    </div>
  );
}

export default App;
