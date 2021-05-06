import React, {useState} from 'react';
import { HeaderContainer, LogoContainer, Anchor, CartContainer, Cart } from './header.styles';

import {auth} from '../../firebase/firebase';

import {useSelector} from 'react-redux';
import { selectCart } from '../../redux/features/cart/cartSlice';
import { selectUser } from '../../redux/features/user/userSlice';
 
const Header = ({toggleActive}) => {

    const cart = useSelector(selectCart)
    const user = useSelector(selectUser)

    return (
        <div>
            <HeaderContainer>
                <LogoContainer>Shark <span>Store</span></LogoContainer>
                <nav>
                    <Anchor to="/">Home</Anchor>
                    <Anchor to="/shop">Shop</Anchor>
                    {
                        user ?
                        (<Anchor onClick={() => auth.signOut()}>Sign Out</Anchor>) :
                        <span>
                            <Anchor to="/sign-in">Sign In</Anchor>
                            <Anchor to="/sign-up">Sign up</Anchor>
                        </span>
                    }
                </nav>
                <CartContainer>
                    <Cart className="fas fa-shopping-cart" onClick={() => toggleActive()}></Cart>
                    Cart | {cart.length} items
                </CartContainer>
            </HeaderContainer>
        </div>
    )
}

export default Header;