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

export const LogoContainer = styled.h2`
    color: #fff;
    font-family: 'Merriweather', serif;
    font-weight: 400;
    letter-spacing: 4px;
    cursor: pointer;

    span{
        color: #94B0B3;
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
`;

export const Cart = styled.i`
    border: 1px solid #fff;
    border-radius: 50%;
    padding: 6px;
    margin-right: 8px;
    cursor: pointer;
`;