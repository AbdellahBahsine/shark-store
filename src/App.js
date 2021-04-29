import React from 'react';
import './App.css';

import {Switch, Route, Link} from 'react-router-dom';

import Header from './components/header/header.component';
import Hero from './components/hero/hero.component';
import ProductsList from './components/products-list/products-list.component';
import Footer from './components/footer/footer.component';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ProductsList />
      </main>
      <Footer />
    </div>
  )
}

export default App;
