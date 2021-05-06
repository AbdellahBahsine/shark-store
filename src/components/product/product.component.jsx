import {ProductContainer, Card, ImageContainer, Image, ContentContainer, CardTitle, CardText, AddToCart, Button} from './product.styles';

import {useDispatch} from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';

const Product = ({items}) => {

    const dispatch = useDispatch()

    return (
        <ProductContainer>
            {items.map(item => {
                return (<Card key={item.id}>
                    <ImageContainer><Image imageUrl={item.imageUrl}></Image></ImageContainer>
                    <ContentContainer>
                        <CardTitle>{item.name}</CardTitle>
                        <CardText>${item.price}</CardText>
                    </ContentContainer>
                    <Button onClick={() => dispatch(addToCart(item))}>Add To Cart</Button>
                    <AddToCart onClick={() => dispatch(addToCart(item))}><i className="fas fa-shopping-cart"></i></AddToCart>
                </Card>)
            })}
        </ProductContainer>
    )
}

export default Product;