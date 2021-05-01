import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderContainer = styled.header`
    height: 65px;
    padding: 0 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #3E4756;
`;

export const LogoContainer = styled.h2`
    color: #fff;
`;
 
export const Anchor = styled(Link)`
    margin: 0 15px;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
`;

export const CartContainer = styled.div`
    color: #fff;
`;

export const Cart = styled.i`
    border: 1px solid #fff;
    border-radius: 50%;
    padding: 6px;
    margin-right: 8px;
`;