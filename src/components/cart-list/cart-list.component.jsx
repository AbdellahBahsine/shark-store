import {CartListContainer, CartContainer, Button} from './cart-list.styles';

import Cart from '../cart/cart.component';

const CartList = ({cartItems, isActive}) => {
    return (
        <CartContainer className={isActive ? "active" : null}>
            <CartListContainer>{cartItems.map(({id, ...otherProps}) => <Cart key={id} {...otherProps} />)}</CartListContainer>
            <Button>Proceed to checkout</Button>
        </CartContainer>
    )
}

export default CartList;