import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderContainer = styled.header`
    position: relative;
    z-index: 3;
    height: 65px;
    padding: 0 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #006D75;
`;

export const MobileNav = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: #00474d;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.open{
        width: 100%;
        transition: 0.6s;
    }

    a{
        margin: 20px 0;
        font-size: 26px;
    }

    span{
        display: flex;
        flex-direction: column;
    }
`;

export const Bars = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

export const Bar = styled.span`
    width: 20px;
    height: 2px;
    margin: 3px 0;
    background: #fff;
`;

export const LogoContainer = styled.h2`
    color: #fff;
    font-family: 'Merriweather', serif;
    font-weight: 400;
    letter-spacing: 4px;
    cursor: pointer;

    span{
        color: #94B0B3;
    }

    @media all and (max-width: 750px){
        font-size: 20px;
    }
`;

export const Nav = styled.nav`
    display: flex;

    @media all and (max-width: 750px){
        display: none;
    }
`;
 
export const Anchor = styled(Link)`
    margin: 0 15px;
    color: #fff; 
    text-decoration: none;
    text-transform: uppercase;

    &:hover{
        color: #94B0B3;
        transition: 0.6s;
    }
`;

export const CartContainer = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
`;

export const Cart = styled.i`
    border: 1px solid #fff;
    border-radius: 50%;
    padding: 8px;
    margin-right: 8px;
    cursor: pointer; 
    font-size: 14px;

    @media screen and (max-width: 675px){
        margin-right: 0;
    }
`;

export const CartText = styled.p`
    
    @media screen and (max-width: 675px){
        display: none;
    }
`;