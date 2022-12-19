import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/greeting';

function App() {

  return (
    <div className="App">

      <NavBar />
      <ItemListContainer />


    </div>
  );
}

export default App;
