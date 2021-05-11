import {CartListContainer, CartContainer} from './cart-list.styles';

import styled from 'styled-components';
import CustomButton from '../button/button.component';

import { useHistory } from "react-router-dom";

import Cart from '../cart/cart.component';

import {useSelector} from 'react-redux';
import { selectCart } from '../../redux/features/cart/cartSlice';

const ModifiedCustomButton = styled(CustomButton)`
    margin: 10px 0;
`;

const CartList = ({isActive}) => {

    const cart = useSelector(selectCart)

    const history = useHistory();

    return (
        <CartContainer className={isActive ? "active" : null}>
            <CartListContainer>{cart.map(({id, ...otherProps}) => <Cart key={id} {...otherProps} />)}</CartListContainer>
            <ModifiedCustomButton onClick={() => history.push('/checkout')}>Proceed to checkout</ModifiedCustomButton>
        </CartContainer>
    )
}

export default CartList;