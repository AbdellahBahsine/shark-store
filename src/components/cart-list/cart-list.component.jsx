import {CartListContainer, CartContainer} from './cart-list.styles';

import CustomButton from '../button/button.component';

import { useHistory } from "react-router-dom";

import Cart from '../cart/cart.component';

import {useSelector} from 'react-redux';
import { selectCart } from '../../redux/features/cart/cartSlice';

const CartList = ({isActive}) => {

    const cart = useSelector(selectCart)

    const history = useHistory();

    return (
        <CartContainer className={isActive ? "active" : null}>
            <CartListContainer>{cart.map(({id, ...otherProps}) => <Cart key={id} {...otherProps} />)}</CartListContainer>
            <CustomButton onClick={() => history.push('/checkout')}>Proceed to checkout</CustomButton>
        </CartContainer>
    )
}

export default CartList;