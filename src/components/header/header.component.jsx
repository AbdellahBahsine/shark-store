import React, {useState} from 'react';
import { HeaderContainer, LogoContainer, Anchor, CartContainer, Cart } from './header.styles';

import CartList from '../cart-list/cart-list.component';

import {auth} from '../../firebase/firebase';
 
const Header = ({currentUser, cartItems, toggleActive}) => {

    return (
        <div>
            <HeaderContainer>
                <LogoContainer>Shark Store</LogoContainer>
                <nav>
                    <Anchor to="/">Home</Anchor>
                    <Anchor to="/shop">Shop</Anchor>
                    {
                        currentUser ?
                        (<div onClick={() => auth.signOut()}>Sign Out</div>) :
                        <div>Lol</div>
                    }
                </nav>
                <CartContainer>
                    <Cart className="fas fa-shopping-cart" onClick={() => toggleActive()}></Cart>
                    Cart | {cartItems.length} items
                </CartContainer>
            </HeaderContainer>
        </div>
    )
}

export default Header;