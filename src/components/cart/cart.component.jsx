import {CartContainer, Image, TextContainer, Title, Container, Price, Quantity} from './cart.styles';

const Cart = ({name, imageUrl, price, quantity}) => {
    return (
        <CartContainer>
            <Image imageUrl={imageUrl}></Image>
            <TextContainer>
                <Title>{name}</Title>
                <Container>
                    <Price>${price}</Price>
                    <Quantity><strong>Quantity: </strong>{quantity}</Quantity>
                </Container>
            </TextContainer>
        </CartContainer>
    )
}

export default Cart;