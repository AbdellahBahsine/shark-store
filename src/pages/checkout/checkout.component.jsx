import {CheckoutContainer, ShoppingCart, Title, Content, CartItemsContainer, Header, Product, Quantity, TotalPrice, CartItems, Item, ProductNameContainer, Image, ProductName, QuantityNumber, TotalPriceNumber, BackToShopping, PaymentInfo, PriceContainer, Note} from './checkout.styles';

import StripeCheckout from 'react-stripe-checkout';

import { useHistory } from "react-router-dom";

import {selectTotalPrice, selectCart, addToCart, decrement} from '../../redux/features/cart/cartSlice';
import {useSelector, useDispatch} from 'react-redux';

const Checkout = () => {

    const cart = useSelector(selectCart)
    const sum = useSelector(selectTotalPrice)
    const dispatch = useDispatch()

    const history = useHistory();

    const onToken = token => {
        console.log(token)
        alert("Your payment is successful!")
    }

    return (
        <CheckoutContainer>
            <ShoppingCart>
                <Title>Shopping Cart</Title>
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
                                        <QuantityNumber><i className="fas fa-minus" onClick={() => dispatch(decrement(item))}></i> <span>{item.quantity}</span> <i className="fas fa-plus" onClick={() => dispatch(addToCart(item))}></i></QuantityNumber>
                                        <TotalPriceNumber>${item.totalPrice}</TotalPriceNumber> 
                                    </Item>
                                )
                            })}
                        </CartItems>
                        <BackToShopping onClick={() => history.push('/shop')}><i className="fas fa-arrow-left"></i> Continue Shopping</BackToShopping>
                    </CartItemsContainer>
                    <PaymentInfo>
                            <PriceContainer><strong>Total Price:</strong> <p>${sum}</p></PriceContainer>
                            <StripeCheckout
                                name="Shark Store"
                                amount={sum * 100}
                                token={onToken}
                                stripeKey="pk_test_51Io4WVDOWdRk19hKW95w5w0bWIN0fbXrDvtICf7ve0jZLbeVqS4Jq4emVgxoCnXLTjvAtWUMaMzpdBU6P1jNiB0s001W5MghRu"
                            ></StripeCheckout>
                            <Note>Use this fake card number <strong>4242424242424242</strong> and any date in the future, and random CVC number would work</Note>
                    </PaymentInfo>
                </Content>
            </ShoppingCart>
        </CheckoutContainer>
    )
}

export default Checkout;