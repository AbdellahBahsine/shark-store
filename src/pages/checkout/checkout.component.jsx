import {CheckoutContainer, ShoppingCart, CartItemsContainer, Header, Product, Quantity, TotalPrice, CartItems, PaymentInfo} from './checkout.styles';

const Checkout = ({cartItems}) => {
    return (
        <CheckoutContainer>
            <ShoppingCart>
                <h2>Shopping Cart</h2>
                <CartItemsContainer>
                    <Header>
                        <Product>Product</Product>
                        <Quantity>Quantity</Quantity>
                        <TotalPrice>Total Price</TotalPrice>
                    </Header>
                    <CartItems>
                        {cartItems.map(item => {
                            return (
                                <div>
                                    {item.name}
                                </div>
                            )
                        })}
                    </CartItems>
                </CartItemsContainer>
            </ShoppingCart>
        </CheckoutContainer>
    )
}

export default Checkout;