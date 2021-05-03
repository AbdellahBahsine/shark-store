import React, {useState} from 'react';
import './App.css';

import {Switch, Route, Link} from 'react-router-dom';

import Header from './components/header/header.component';
import CartList from './components/cart-list/cart-list.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Footer from './components/footer/footer.component';

const App = () => {

  const [cartItems, setCartItems] = useState([]);
  const [isActive, setIsActive] = useState(false)

  const handleClick = add => {
    setCartItems(add)
  }

  const toggleActive = () => {
    setIsActive(!isActive)
}

const addItemToCart = (cartItems, newCartItem) => {
  const existingCartItem = cartItems.find(item => item.id === newCartItem.id)

  if(existingCartItem){
      return cartItems.map(item => 
          item.id === newCartItem.id ? {...item, quantity: item.quantity + 1} : item
      )
  }

  return [...cartItems, {...newCartItem, quantity: 1}]
}

  return (
    <div className={isActive ? "app move" : "app"}>
      <Header cartItems={cartItems} toggleActive={toggleActive} />
      <CartList cartItems={cartItems} isActive={isActive}></CartList>
      <main>
        <Route exact path='/' render={(props) => (<HomePage cartItems={cartItems} handleClick={handleClick} addItemToCart={addItemToCart} />)} />
        <Route exact path='/shop' render={(props) => (<ShopPage cartItems={cartItems} handleClick={handleClick} addItemToCart={addItemToCart} />)} />
      </main>
      <Footer />
    </div>
  )
}

export default App;
