import React from 'react';
import './App.css';

import {Switch, Route, Link} from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Footer from './components/footer/footer.component';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </main>
      <Footer />
    </div>
  )
}

export default App;
