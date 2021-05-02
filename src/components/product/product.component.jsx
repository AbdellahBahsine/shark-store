import {ProductContainer, Card, ImageContainer, Image, CardTitle, CardText, AddToCart} from './product.styles';

import SHOP_DATA from '../collections-list/shop_data';

const Product = () => {
    return (
        <ProductContainer>
            <Card>
                <ImageContainer><Image></Image></ImageContainer>
                <CardTitle>{SHOP_DATA[0].items[0].name}</CardTitle>
                <CardText>${SHOP_DATA[0].items[0].price}</CardText>
                <AddToCart><i className="fas fa-shopping-cart"></i></AddToCart>
            </Card>
            <Card>
                <ImageContainer><Image></Image></ImageContainer>
                <CardTitle>{SHOP_DATA[0].items[2].name}</CardTitle>
                <CardText>${SHOP_DATA[0].items[2].price}</CardText>
                <AddToCart><i className="fas fa-shopping-cart"></i></AddToCart>
            </Card>
            <Card>
                <ImageContainer><Image></Image></ImageContainer>
                <CardTitle>{SHOP_DATA[0].items[1].name}</CardTitle>
                <CardText>${SHOP_DATA[0].items[1].price}</CardText>
                <AddToCart><i className="fas fa-shopping-cart"></i></AddToCart>
            </Card>

            <Card>
                <ImageContainer><Image></Image></ImageContainer>
                <CardTitle>{SHOP_DATA[2].items[3].name}</CardTitle>
                <CardText>${SHOP_DATA[2].items[3].price}</CardText>
                <AddToCart><i className="fas fa-shopping-cart"></i></AddToCart>
            </Card>
            <Card>
                <ImageContainer><Image></Image></ImageContainer>
                <CardTitle>{SHOP_DATA[1].items[0].name}</CardTitle>
                <CardText>${SHOP_DATA[1].items[0].price}</CardText>
                <AddToCart><i className="fas fa-shopping-cart"></i></AddToCart>
            </Card>
            <Card>
                <ImageContainer><Image></Image></ImageContainer>
                <CardTitle>{SHOP_DATA[2].items[0].name}</CardTitle>
                <CardText>${SHOP_DATA[2].items[0].price}</CardText>
                <AddToCart><i className="fas fa-shopping-cart"></i></AddToCart>
            </Card>
        </ProductContainer>
    )
}

export default Product;