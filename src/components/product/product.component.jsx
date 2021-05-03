import {ProductContainer, Card, ImageContainer, Image, CardTitle, CardText, AddToCart} from './product.styles';

import SHOP_DATA from '../collections-list/shop_data';

const Product = ({cartItems, handleClick, addItemToCart}) => {

    return (
        <ProductContainer>
            <Card key={SHOP_DATA[1].items[0].id}>
                <ImageContainer><Image imageUrl={SHOP_DATA[1].items[0].imageUrl}></Image></ImageContainer>
                <CardTitle>{SHOP_DATA[1].items[0].name}</CardTitle>
                <CardText>${SHOP_DATA[1].items[0].price}</CardText>
                <AddToCart onClick={() => handleClick(addItemToCart(cartItems, SHOP_DATA[1].items[0]))}><i className="fas fa-shopping-cart"></i></AddToCart>
            </Card>
            <Card key={SHOP_DATA[0].items[2].id}>
                <ImageContainer><Image imageUrl={SHOP_DATA[0].items[2].imageUrl}></Image></ImageContainer>
                <CardTitle>{SHOP_DATA[0].items[2].name}</CardTitle>
                <CardText>${SHOP_DATA[0].items[2].price}</CardText>
                <AddToCart onClick={() => handleClick(addItemToCart(cartItems, SHOP_DATA[1].items[0]))}><i className="fas fa-shopping-cart"></i></AddToCart>
            </Card>
            <Card key={SHOP_DATA[0].items[1].id}>
                <ImageContainer><Image imageUrl={SHOP_DATA[0].items[1].imageUrl}></Image></ImageContainer>
                <CardTitle>{SHOP_DATA[0].items[1].name}</CardTitle>
                <CardText>${SHOP_DATA[0].items[1].price}</CardText>
                <AddToCart onClick={() => handleClick(addItemToCart(cartItems, SHOP_DATA[1].items[0]))}><i className="fas fa-shopping-cart"></i></AddToCart>
            </Card>

            <Card key={SHOP_DATA[2].items[3].id}>
                <ImageContainer><Image imageUrl={SHOP_DATA[2].items[3].imageUrl}></Image></ImageContainer>
                <CardTitle>{SHOP_DATA[2].items[3].name}</CardTitle>
                <CardText>${SHOP_DATA[2].items[3].price}</CardText>
                <AddToCart onClick={() => handleClick(addItemToCart(cartItems, SHOP_DATA[1].items[0]))}><i className="fas fa-shopping-cart"></i></AddToCart>
            </Card>
            <Card key={SHOP_DATA[1].items[1].id}>
                <ImageContainer><Image imageUrl={SHOP_DATA[1].items[1].imageUrl}></Image></ImageContainer>
                <CardTitle>{SHOP_DATA[1].items[1].name}</CardTitle>
                <CardText>${SHOP_DATA[1].items[1].price}</CardText>
                <AddToCart onClick={() => handleClick(addItemToCart(cartItems, SHOP_DATA[1].items[0]))}><i className="fas fa-shopping-cart"></i></AddToCart>
            </Card>
            <Card key={SHOP_DATA[2].items[0].id}>
                <ImageContainer><Image imageUrl={SHOP_DATA[2].items[0].imageUrl}></Image></ImageContainer>
                <CardTitle>{SHOP_DATA[2].items[0].name}</CardTitle>
                <CardText>${SHOP_DATA[2].items[0].price}</CardText>
                <AddToCart onClick={() => handleClick(addItemToCart(cartItems, SHOP_DATA[1].items[0]))}><i className="fas fa-shopping-cart"></i></AddToCart>
            </Card>
        </ProductContainer>
    )
}

export default Product;