import React, {useState} from 'react';
import { HeaderContainer, LogoContainer, Anchor, CartContainer, Cart } from './header.styles';

import CartList from '../cart-list/cart-list.component';

import {auth} from '../../firebase/firebase';
 
const Header = ({currentUser, cartItems, toggleActive}) => {

    return (
        <div>
            <HeaderContainer>
                <LogoContainer>Shark <span>Store</span></LogoContainer>
                <nav>
                    <Anchor to="/">Home</Anchor>
                    <Anchor to="/shop">Shop</Anchor>
                    {
                        currentUser ?
                        (<Anchor onClick={() => auth.signOut()}>Sign Out</Anchor>) :
                        <span>
                            <Anchor to="/sign-in">Sign In</Anchor>
                            <Anchor to="/sign-up">Sign up</Anchor>
                        </span>
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