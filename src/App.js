import React from 'react';
import './App.css';

import {Switch, Route, Link} from 'react-router-dom';

import Header from './components/header/header.component';
import Hero from './components/hero/hero.component';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App;
