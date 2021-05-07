import React from 'react';
import { MobileNav, HeaderContainer, Bars, Bar, LogoContainer, Nav, Anchor, CartContainer, Cart, CartText } from './header.styles';

import {auth} from '../../firebase/firebase';

import { useHistory } from "react-router-dom";

import {useSelector} from 'react-redux';
import { selectCart } from '../../redux/features/cart/cartSlice';
import { selectUser } from '../../redux/features/user/userSlice';
 
const Header = ({toggleActive, toggleOpen, isOpen}) => {

    const cart = useSelector(selectCart)
    const user = useSelector(selectUser)

    const history = useHistory();

    return (
        <div>
            <HeaderContainer>
                <Bars onClick={() => toggleOpen()}>
                    <Bar></Bar>
                    <Bar></Bar>
                    <Bar></Bar>
                </Bars>
                <LogoContainer onClick={() => history.push('/')}>Shark <span>Store</span></LogoContainer>
                <Nav>
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
                </Nav>
                <CartContainer>
                    <Cart className="fas fa-shopping-cart" onClick={() => toggleActive()}></Cart>
                    <CartText>Cart | {cart.length} items</CartText>
                </CartContainer>
            </HeaderContainer>
            <MobileNav className={isOpen ? "open" : ""}>
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
            </MobileNav>
        </div>
    )
}

export default Header;