import React from 'react';
import './App.css';

import {Switch, Route, Link} from 'react-router-dom';

import Header from './components/header/header.component';

const App = () => {
  return (
    <div className="app">
      <Header />
    </div>
  )
}

export default App;
