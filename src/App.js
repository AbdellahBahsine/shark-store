import React, {useState, useEffect} from 'react';
import './App.css';

import {Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import CartList from './components/cart-list/cart-list.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignUp from './pages/sign-up/sign-up.component';
import SignIn from './pages/sign-in/sign-in.component';
import Checkout from './pages/checkout/checkout.component';
import Footer from './components/footer/footer.component';

import {auth, createUserProfileDocument} from './firebase/firebase';

import {useDispatch, useSelector} from 'react-redux';
import {selectUser, addUser} from './redux/features/user/userSlice';

const App = () => {

  const [isActive, setIsActive] = useState(false)
  const [loading, setIsLoading] = useState(true)

  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  

  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          dispatch(addUser({
            id: snapShot.id,
            ...snapShot.data()
          }))
        })
      }

      dispatch(addUser(userAuth))

      setIsLoading(false)
    })

    return () => {
      unsubscribeFromAuth()
    }

  }, [])

  const toggleActive = () => {
    setIsActive(!isActive)
}

  return (
    <div>
      {loading 
      ?
      <div class="container"><div class="loader"></div></div>
      :
      <div className={isActive ? "app move" : "app"}>
      <Header toggleActive={toggleActive} /> 
      <CartList isActive={isActive}></CartList>
      <main>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/sign-up' render={() => user ? <Redirect path="/" /> : <SignUp />} />
        <Route exact path='/sign-in' render={() => user ? <Redirect path="/" /> : <SignIn />} />
        <Route exact path='/checkout' component={Checkout} />
      </main>
      <Footer />
      </div>}
    </div>
  )
}

export default App;
