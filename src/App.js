import React, {useState, useEffect} from 'react';
import './App.css';

import {Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import CartList from './components/cart-list/cart-list.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignUp from './pages/sign-up/sign-up.component';
import SignIn from './pages/sign-in/sign-in.component';
import Footer from './components/footer/footer.component';

import {auth, createUserProfileDocument} from './firebase/firebase';

const App = () => {

  const [currentUser, setCurrentUser] = useState(null)
  const [cartItems, setCartItems] = useState([]);
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }

      setCurrentUser(userAuth)
    })

    return () => {
      unsubscribeFromAuth()
    }

  }, [])

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
      <Header currentUser={currentUser} cartItems={cartItems} toggleActive={toggleActive} />
      <CartList cartItems={cartItems} isActive={isActive}></CartList>
      <main>
        <Route exact path='/' render={(props) => (<HomePage cartItems={cartItems} handleClick={handleClick} addItemToCart={addItemToCart} />)} />
        <Route exact path='/shop' render={(props) => (<ShopPage cartItems={cartItems} handleClick={handleClick} addItemToCart={addItemToCart} />)} />
        <Route exact path='/sign-up' render={() => currentUser ? <Redirect to='/' /> : <SignUp /> } />
        <Route exact path='/sign-in' render={() => currentUser ? <Redirect to='/' /> : <SignIn /> } />
      </main>
      <Footer />
    </div>
  )
}

export default App;
