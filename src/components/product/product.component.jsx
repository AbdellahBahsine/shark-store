import {ProductContainer, Card, ImageContainer, Image, CardTitle, CardText, AddToCart} from './product.styles';

const Product = ({cartItems, handleClick, addItemToCart, items}) => {

    return (
        <ProductContainer>
            {items.map(item => {
                return (<Card key={item.id}>
                    <ImageContainer><Image imageUrl={item.imageUrl}></Image></ImageContainer>
                    <CardTitle>{item.name}</CardTitle>
                    <CardText>{item.price}</CardText>
                    <AddToCart onClick={() => handleClick(addItemToCart(cartItems, item))}><i className="fas fa-shopping-cart"></i></AddToCart>
                </Card>)
            })}
        </ProductContainer>
    )
}

export default Product;