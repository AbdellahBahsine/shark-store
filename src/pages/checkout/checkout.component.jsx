import {CheckoutContainer, ShoppingCart, Content, CartItemsContainer, Header, Product, Quantity, TotalPrice, CartItems, Item, ProductNameContainer, Image, ProductName, QuantityNumber, TotalPriceNumber, BackToShopping, PaymentInfo, PayemntInfoTitle, PaymentTotalPrice, Button} from './checkout.styles';

import { useHistory } from "react-router-dom";

import {selectCart, addToCart, decrement} from '../../redux/features/cart/cartSlice';
import {useSelector, useDispatch} from 'react-redux';

const Checkout = () => {

    const cart = useSelector(selectCart)
    const dispatch = useDispatch()

    const history = useHistory();

    return (
        <CheckoutContainer>
            <ShoppingCart>
                <h2>Shopping Cart</h2>
                <Content>
                    <CartItemsContainer>
                        <Header>
                            <Product>Product</Product>
                            <Quantity>Quantity</Quantity>
                            <TotalPrice>Total Price</TotalPrice>
                        </Header>
                        <CartItems>
                            {cart.map(item => {
                                return (
                                    <Item>
                                        <ProductNameContainer>
                                            <Image imageUrl={item.imageUrl}></Image>
                                            <ProductName>{item.name}</ProductName>
                                        </ProductNameContainer>
                                        <QuantityNumber><i class="fas fa-chevron-left" onClick={() => dispatch(decrement(item))}></i> <span>{item.quantity}</span> <i class="fas fa-chevron-right" onClick={() => dispatch(addToCart(item))}></i></QuantityNumber>
                                        <TotalPriceNumber>${item.totalPrice}</TotalPriceNumber> 
                                    </Item>
                                )
                            })}
                        </CartItems>
                        <BackToShopping onClick={() => history.push('/shop')}><i class="fas fa-arrow-left"></i> Continue Shopping</BackToShopping>
                    </CartItemsContainer>
                    <PaymentInfo>
                            <PayemntInfoTitle>Order Summary</PayemntInfoTitle>
                            <PaymentTotalPrice><strong>Total Price:</strong></PaymentTotalPrice>
                            <Button>Checkout</Button>
                    </PaymentInfo>
                </Content>
            </ShoppingCart>
        </CheckoutContainer>
    )
}

export default Checkout;