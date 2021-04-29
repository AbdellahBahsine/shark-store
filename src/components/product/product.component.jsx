import {ProductContainer, Card, ImageContainer, Image, CardTitle, CardText, AddToCart} from './product.styles';

const Product = () => {
    return (
        <ProductContainer>
            <Card>
                <ImageContainer><Image></Image></ImageContainer>
                <CardTitle>Brown Suit Jacket</CardTitle>
                <CardText>$20</CardText>
                <AddToCart><i className="fas fa-shopping-cart"></i></AddToCart>
            </Card>
            <Card>
                <ImageContainer><Image></Image></ImageContainer>
                <CardTitle>Long Sleeve Dress</CardTitle>
                <CardText>$25</CardText>
                <AddToCart><i className="fas fa-shopping-cart"></i></AddToCart>
            </Card>
            <Card>
                <ImageContainer><Image></Image></ImageContainer>
                <CardTitle>Floral Spaghetti Strap</CardTitle>
                <CardText>$15</CardText>
                <AddToCart><i className="fas fa-shopping-cart"></i></AddToCart>
            </Card>

            <Card>
                <ImageContainer><Image></Image></ImageContainer>
                <CardTitle>White Nike</CardTitle>
                <CardText>$165</CardText>
                <AddToCart><i className="fas fa-shopping-cart"></i></AddToCart>
            </Card>
            <Card>
                <ImageContainer><Image></Image></ImageContainer>
                <CardTitle>Brown Suit Jacket</CardTitle>
                <CardText>$20</CardText>
                <AddToCart><i className="fas fa-shopping-cart"></i></AddToCart>
            </Card>
            <Card>
                <ImageContainer><Image></Image></ImageContainer>
                <CardTitle>Red/White Air Jordan</CardTitle>
                <CardText>$100</CardText>
                <AddToCart><i className="fas fa-shopping-cart"></i></AddToCart>
            </Card>
        </ProductContainer>
    )
}

export default Product;