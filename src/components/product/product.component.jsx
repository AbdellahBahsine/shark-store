import {ProductContainer, Card, ImageContainer, Image, ContentContainer, CardTitle, CardText, AddToCart, Button} from './product.styles';

const Product = ({cartItems, handleClick, addItemToCart, items}) => {

    return (
        <ProductContainer>
            {items.map(item => {
                return (<Card key={item.id}>
                    <ImageContainer><Image imageUrl={item.imageUrl}></Image></ImageContainer>
                    <ContentContainer>
                        <CardTitle>{item.name}</CardTitle>
                        <CardText>${item.price}</CardText>
                    </ContentContainer>
                    <Button>Add To Cart</Button>
                    <AddToCart onClick={() => handleClick(addItemToCart(cartItems, item))}><i className="fas fa-shopping-cart"></i></AddToCart>
                </Card>)
            })}
        </ProductContainer>
    )
}

export default Product;