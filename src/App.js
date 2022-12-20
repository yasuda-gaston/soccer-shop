import React from 'react';
import './App.css';
import Counter from './components/Counter';
import NavBar from './components/NavBar';
import ItemListContainer from './container/greeting';

function App() {

  return (
    <div className="App">

      <NavBar />
      <ItemListContainer />
      <Counter />

    </div>
  );
}

export default App;
