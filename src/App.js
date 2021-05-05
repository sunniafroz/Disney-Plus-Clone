import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

import Header from './components/Header.js'
import Home from './components/Home.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
