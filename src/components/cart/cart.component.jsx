import {CartContainer} from './cart.styles';

const Cart = ({name}) => {
    return (
        <CartContainer>
            <p>{name}</p>
        </CartContainer>
    )
}

export default Cart;