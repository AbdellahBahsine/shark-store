import React from 'react';
import { HeaderContainer, LogoContainer, Anchor, CartContainer, Cart } from './header.styles';

import CartList from '../cart-list/cart-list.component';
 
const Header = ({cartItems}) => {
    console.log(cartItems)
    return (
        <HeaderContainer>
            <LogoContainer>Shark Store</LogoContainer>
            <nav>
                <Anchor to="/">Home</Anchor>
                <Anchor to="/shop">Shop</Anchor>
                <Anchor href="#">Sign In</Anchor>
                <Anchor href="#">Sign Up</Anchor>
            </nav>
            <CartContainer>
                <Cart className="fas fa-shopping-cart"></Cart>
                Cart | {cartItems.length} items
            </CartContainer>
            <CartList cartItems={cartItems}></CartList>
        </HeaderContainer>
    )
}

export default Header;