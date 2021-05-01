import {CartListContainer, t} from './cart-list.styles';

import Cart from '../cart/cart.component';

const CartList = ({cartItems}) => {
    return (
        <CartListContainer>
            {cartItems.map(({id, ...otherProps}) => <Cart key={id} {...otherProps} />)}
        </CartListContainer>
    )
}

export default CartList;