import React from 'react';
import { HeaderContainer, LogoContainer, Link, CartContainer, Cart } from './header.styles';

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>Shark Store</LogoContainer>
            <nav>
                <Link href="#">Home</Link>
                <Link href="#">Shop</Link>
                <Link href="#">Sign In</Link>
                <Link href="#">Sign Up</Link>
            </nav>
            <CartContainer>
                <Cart className="fas fa-shopping-cart"></Cart>
                Cart | 0 items
            </CartContainer>
        </HeaderContainer>
    )
}

export default Header;