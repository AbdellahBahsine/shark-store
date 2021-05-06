import {CartListContainer, CartContainer, Button} from './cart-list.styles';

import Cart from '../cart/cart.component';

import {useSelector} from 'react-redux';
import { selectCart } from '../../redux/features/cart/cartSlice';

const CartList = ({isActive}) => {

    const cart = useSelector(selectCart)

    return (
        <CartContainer className={isActive ? "active" : null}>
            <CartListContainer>{cart.map(({id, ...otherProps}) => <Cart key={id} {...otherProps} />)}</CartListContainer>
            <Button>Proceed to checkout</Button>
        </CartContainer>
    )
}

export default CartList;