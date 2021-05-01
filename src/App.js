import React, {useState} from 'react';
import './App.css';

import {Switch, Route, Link} from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Footer from './components/footer/footer.component';

const App = () => {

  const [cartItems, setCartItems] = useState([]);

  const handleClick = add => {
    setCartItems(add)
  }

  return (
    <div className="app">
      <Header cartItems={cartItems} />
      <main>
        <Route exact path='/' render={(props) => (<HomePage  />)} />
        <Route exact path='/shop' render={(props) => (<ShopPage cartItems={cartItems} handleClick={handleClick} />)} />
      </main>
      <Footer />
    </div>
  )
}

export default App;
